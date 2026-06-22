import type {
  ReviewStage,
  UserWordProgress,
  WordStatus,
} from '../data/types'

export const PROGRESS_STORAGE_KEY = 'japanese-vocab-progress-v1'

const wordStatuses: WordStatus[] = [
  'unlearned',
  'learning',
  'initialKnown',
  'unfamiliar',
  'forgotten',
  'stable',
  'mastered',
]

const reviewStages: ReviewStage[] = ['none', 'B', 'A', 'C', 'completed']

function isNullableString(value: unknown): value is string | null {
  return typeof value === 'string' || value === null
}

function isUserWordProgress(value: unknown): value is UserWordProgress {
  if (typeof value !== 'object' || value === null) {
    return false
  }

  const progress = value as Record<string, unknown>

  return (
    typeof progress.id === 'string' &&
    typeof progress.userId === 'string' &&
    typeof progress.wordId === 'string' &&
    wordStatuses.includes(progress.status as WordStatus) &&
    reviewStages.includes(progress.reviewStage as ReviewStage) &&
    isNullableString(progress.passedBAt) &&
    isNullableString(progress.passedAAt) &&
    isNullableString(progress.passedCAt) &&
    typeof progress.correctCount === 'number' &&
    typeof progress.wrongCount === 'number' &&
    typeof progress.rescueCorrectCount === 'number' &&
    isNullableString(progress.nextReviewAt) &&
    isNullableString(progress.lastReviewedAt) &&
    isNullableString(progress.learnedAt)
  )
}

function cloneProgress(progress: UserWordProgress[]) {
  return progress.map((item) => ({ ...item }))
}

function mergeStoredProgress(
  storedProgress: UserWordProgress[],
  fallback: UserWordProgress[],
) {
  const storedByWordId = new Map(
    storedProgress.map((progress) => [progress.wordId, progress]),
  )

  return fallback.map((fallbackProgress) => ({
    ...(storedByWordId.get(fallbackProgress.wordId) ?? fallbackProgress),
  }))
}

export function loadProgress(fallback: UserWordProgress[]) {
  if (typeof window === 'undefined') {
    return cloneProgress(fallback)
  }

  try {
    const storedValue = window.localStorage.getItem(PROGRESS_STORAGE_KEY)

    if (storedValue === null) {
      return cloneProgress(fallback)
    }

    const parsedValue: unknown = JSON.parse(storedValue)

    if (
      !Array.isArray(parsedValue) ||
      !parsedValue.every(isUserWordProgress)
    ) {
      console.warn('Stored learning progress is invalid; using mock data.')
      return cloneProgress(fallback)
    }

    return mergeStoredProgress(parsedValue, fallback)
  } catch {
    console.warn('Unable to load learning progress; using mock data.')
    return cloneProgress(fallback)
  }
}

export function saveProgress(progress: UserWordProgress[]) {
  if (typeof window === 'undefined') {
    return
  }

  try {
    window.localStorage.setItem(
      PROGRESS_STORAGE_KEY,
      JSON.stringify(progress),
    )
  } catch {
    console.warn('Unable to save learning progress.')
  }
}

export function clearProgress() {
  if (typeof window === 'undefined') {
    return
  }

  try {
    window.localStorage.removeItem(PROGRESS_STORAGE_KEY)
  } catch {
    console.warn('Unable to clear learning progress.')
  }
}
