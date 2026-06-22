export type JlptLevel = 'N4' | 'N3'

export type WordStatus =
  | 'unlearned'
  | 'learning'
  | 'initialKnown'
  | 'unfamiliar'
  | 'forgotten'
  | 'stable'
  | 'mastered'

export type ReviewStage = 'none' | 'B' | 'A' | 'C' | 'completed'

export type SentenceType = 'learning' | 'quiz' | 'reviewA' | 'reviewC'

export type QuestionType = 'newQuiz' | 'reviewB' | 'reviewA' | 'reviewC'

export type DifficultyLevel = 1 | 2 | 3

export interface Word {
  id: string
  wordJa: string
  kana: string
  meaningZh: string
  partOfSpeech: string
  jlptLevel: JlptLevel
  tags: string[]
  sortOrder: number
  isActive: boolean
}

export interface Phrase {
  id: string
  wordId: string
  phraseJa: string
  phraseFurigana: string
  meaningZh: string
  usageOrder: number
}

export interface Sentence {
  id: string
  wordId: string
  sentenceType: SentenceType
  sentenceJa: string
  sentenceFurigana: string
  meaningZh: string
  clozeSentence: string | null
  difficultyLevel: DifficultyLevel
  grammarTags: string[]
  isDailyLife: boolean
}

export interface QuizQuestion {
  id: string
  wordId: string
  sentenceId: string | null
  questionType: QuestionType
  promptZh: string
  questionText: string
  correctAnswer: string
  options: string[]
  fragments: string[]
  explanationZh: string
  difficultyLevel: DifficultyLevel
}

export interface UserWordProgress {
  id: string
  userId: string
  wordId: string
  status: WordStatus
  reviewStage: ReviewStage
  passedBAt: string | null
  passedAAt: string | null
  passedCAt: string | null
  correctCount: number
  wrongCount: number
  rescueCorrectCount: number
  nextReviewAt: string | null
  lastReviewedAt: string | null
  learnedAt: string | null
}
