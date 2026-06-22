import type { UserWordProgress } from '../data/types'
import { toLocalIsoDate } from './date'
import type { ActiveReviewStage } from './progress'

export function makeReviewStageDue(
  progressItems: UserWordProgress[],
  stage: ActiveReviewStage,
  today: string = toLocalIsoDate(),
) {
  return progressItems.map((progress) =>
    progress.reviewStage === stage
      ? { ...progress, nextReviewAt: today }
      : progress,
  )
}

export function makeAllReviewsDue(
  progressItems: UserWordProgress[],
  today: string = toLocalIsoDate(),
) {
  return progressItems.map((progress) =>
    progress.reviewStage === 'B' ||
    progress.reviewStage === 'A' ||
    progress.reviewStage === 'C'
      ? { ...progress, nextReviewAt: today }
      : progress,
  )
}
