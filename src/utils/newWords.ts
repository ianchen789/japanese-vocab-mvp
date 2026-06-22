import type { UserWordProgress, Word } from '../data/types'

export const NEW_WORD_BATCH_SIZE = 10

export function getUnlearnedActiveWords(
  words: Word[],
  progressItems: UserWordProgress[],
) {
  const progressByWordId = new Map(
    progressItems.map((progress) => [progress.wordId, progress]),
  )

  return words
    .filter(
      (word) =>
        word.isActive &&
        progressByWordId.get(word.id)?.status === 'unlearned',
    )
    .sort(
      (firstWord, secondWord) =>
        firstWord.sortOrder - secondWord.sortOrder,
    )
}
