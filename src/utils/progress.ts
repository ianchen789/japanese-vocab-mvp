import type {
  ReviewStage,
  UserWordProgress,
  WordStatus,
} from '../data/types'
import { addDays, isDue } from './date'

export type ActiveReviewStage = Extract<ReviewStage, 'B' | 'A' | 'C'>

export interface NewWordProgressResult {
  wordId: string
  firstAttemptCorrect: boolean
  rescueCorrect: boolean
}

export function isActiveReviewStage(
  stage: ReviewStage,
): stage is ActiveReviewStage {
  return stage === 'B' || stage === 'A' || stage === 'C'
}

export function isProgressDue(
  progress: UserWordProgress,
  today?: string,
) {
  return (
    isActiveReviewStage(progress.reviewStage) &&
    isDue(progress.nextReviewAt, today)
  )
}

export function applyNewWordQuizResults(
  progressItems: UserWordProgress[],
  results: NewWordProgressResult[],
  updatedDate: Date = new Date(),
) {
  const resultByWordId = new Map(
    results.map((result) => [result.wordId, result]),
  )
  const updatedAt = updatedDate.toISOString()

  return progressItems.map((progress) => {
    const result = resultByWordId.get(progress.wordId)

    if (!result) {
      return progress
    }

    const status: WordStatus = result.firstAttemptCorrect
      ? 'initialKnown'
      : result.rescueCorrect
        ? 'unfamiliar'
        : 'forgotten'

    return {
      ...progress,
      status,
      reviewStage: 'B' as const,
      correctCount:
        progress.correctCount + (result.firstAttemptCorrect ? 1 : 0),
      wrongCount:
        progress.wrongCount +
        (result.firstAttemptCorrect ? 0 : result.rescueCorrect ? 1 : 2),
      rescueCorrectCount:
        progress.rescueCorrectCount + (result.rescueCorrect ? 1 : 0),
      nextReviewAt: addDays(updatedDate, 1),
      learnedAt: progress.learnedAt ?? updatedAt,
    }
  })
}

export function applyReviewResult(
  progressItems: UserWordProgress[],
  wordId: string,
  stage: ActiveReviewStage,
  correct: boolean,
  reviewedDate: Date = new Date(),
) {
  const reviewedAt = reviewedDate.toISOString()

  return progressItems.map((progress) => {
    if (progress.wordId !== wordId || progress.reviewStage !== stage) {
      return progress
    }

    if (!correct) {
      return {
        ...progress,
        status:
          stage === 'B'
            ? ('forgotten' as const)
            : ('unfamiliar' as const),
        wrongCount: progress.wrongCount + 1,
        nextReviewAt: addDays(reviewedDate, 1),
        lastReviewedAt: reviewedAt,
      }
    }

    if (stage === 'B') {
      return {
        ...progress,
        status:
          progress.status === 'forgotten'
            ? ('unfamiliar' as const)
            : progress.status,
        reviewStage: 'A' as const,
        passedBAt: reviewedAt,
        correctCount: progress.correctCount + 1,
        nextReviewAt: addDays(reviewedDate, 2),
        lastReviewedAt: reviewedAt,
      }
    }

    if (stage === 'A') {
      return {
        ...progress,
        status: 'stable' as const,
        reviewStage: 'C' as const,
        passedAAt: reviewedAt,
        correctCount: progress.correctCount + 1,
        nextReviewAt: addDays(reviewedDate, 4),
        lastReviewedAt: reviewedAt,
      }
    }

    return {
      ...progress,
      status: 'mastered' as const,
      reviewStage: 'completed' as const,
      passedCAt: reviewedAt,
      correctCount: progress.correctCount + 1,
      nextReviewAt: addDays(reviewedDate, 14),
      lastReviewedAt: reviewedAt,
    }
  })
}
