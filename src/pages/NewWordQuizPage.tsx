import { useCallback, useEffect, useState } from 'react'
import { quizQuestions } from '../data/mockData'
import type { QuizQuestion, Word } from '../data/types'
import { shuffleItems } from '../utils/array'
import type { NewWordProgressResult } from '../utils/progress'
import {
  MistakeRescuePage,
  type MistakeRescueResult,
} from './MistakeRescuePage'

interface NewWordQuizPageProps {
  batchWords: Word[]
  onProgressUpdate: (results: NewWordProgressResult[]) => void
  onReturnHome: () => void
}

function getBatchQuizQuestions(batchWords: Word[]) {
  const batchWordOrder = new Map(
    batchWords.map((word, index) => [word.id, index]),
  )

  return quizQuestions
    .filter(
      (question) =>
        question.questionType === 'newQuiz' &&
        batchWordOrder.has(question.wordId),
    )
    .sort(
      (firstQuestion, secondQuestion) =>
        (batchWordOrder.get(firstQuestion.wordId) ?? 0) -
        (batchWordOrder.get(secondQuestion.wordId) ?? 0),
    )
}

type QuizPhase = 'quiz' | 'rescue' | 'complete'

export function NewWordQuizPage({
  batchWords,
  onProgressUpdate,
  onReturnHome,
}: NewWordQuizPageProps) {
  const [newQuizQuestions] = useState(() =>
    getBatchQuizQuestions(batchWords),
  )
  const [optionsByQuestionId] = useState(
    () =>
      new Map(
        newQuizQuestions.map((question) => [
          question.id,
          shuffleItems(question.options),
        ]),
      ),
  )
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [firstCorrectCount, setFirstCorrectCount] = useState(0)
  const [firstCorrectWordIds, setFirstCorrectWordIds] = useState<string[]>([])
  const [wrongQuestions, setWrongQuestions] = useState<QuizQuestion[]>([])
  const [rescueCorrectCount, setRescueCorrectCount] = useState(0)
  const [rescueWrongCount, setRescueWrongCount] = useState(0)
  const [phase, setPhase] = useState<QuizPhase>('quiz')

  const currentQuestion = newQuizQuestions[currentIndex]
  const currentOptions = currentQuestion
    ? (optionsByQuestionId.get(currentQuestion.id) ?? currentQuestion.options)
    : []
  const isAnswered = selectedAnswer !== null
  const isCorrect =
    isAnswered && selectedAnswer === currentQuestion?.correctAnswer

  const handleAnswer = (answer: string) => {
    if (isAnswered || !currentQuestion) {
      return
    }

    setSelectedAnswer(answer)

    if (answer === currentQuestion.correctAnswer) {
      setFirstCorrectCount((count) => count + 1)
      setFirstCorrectWordIds((wordIds) => [
        ...wordIds,
        currentQuestion.wordId,
      ])
    } else {
      setWrongQuestions((questions) => [...questions, currentQuestion])
    }
  }

  const handleNext = useCallback(() => {
    if (!isAnswered) {
      return
    }

    if (currentIndex === newQuizQuestions.length - 1) {
      if (wrongQuestions.length > 0) {
        setPhase('rescue')
      } else {
        onProgressUpdate(
          firstCorrectWordIds.map((wordId) => ({
            wordId,
            firstAttemptCorrect: true,
            rescueCorrect: false,
          })),
        )
        setPhase('complete')
      }
      return
    }

    setCurrentIndex((index) => index + 1)
    setSelectedAnswer(null)
  }, [
    currentIndex,
    firstCorrectWordIds,
    isAnswered,
    newQuizQuestions.length,
    onProgressUpdate,
    wrongQuestions.length,
  ])

  useEffect(() => {
    if (!isCorrect || phase !== 'quiz') {
      return
    }

    const timer = window.setTimeout(handleNext, 250)

    return () => window.clearTimeout(timer)
  }, [handleNext, isCorrect, phase])

  const handleRescueComplete = (results: MistakeRescueResult[]) => {
    const rescueResultByWordId = new Map(
      results.map((result) => [result.wordId, result.correct]),
    )
    const finalResults: NewWordProgressResult[] = [
      ...firstCorrectWordIds.map((wordId) => ({
        wordId,
        firstAttemptCorrect: true,
        rescueCorrect: false,
      })),
      ...wrongQuestions.map((question) => ({
        wordId: question.wordId,
        firstAttemptCorrect: false,
        rescueCorrect: rescueResultByWordId.get(question.wordId) ?? false,
      })),
    ]
    const correctRescueCount = results.filter((result) => result.correct).length
    const wrongRescueCount = results.length - correctRescueCount

    setRescueCorrectCount(correctRescueCount)
    setRescueWrongCount(wrongRescueCount)
    onProgressUpdate(finalResults)
    setPhase('complete')
  }

  if (phase === 'rescue') {
    return (
      <MistakeRescuePage
        questions={wrongQuestions}
        onComplete={handleRescueComplete}
      />
    )
  }

  if (phase === 'complete' || !currentQuestion) {
    return (
      <main className="page quiz-completion-page">
        <section className="quiz-completion-card" aria-labelledby="quiz-done">
          <h1 id="quiz-done">今日學習完成</h1>
          <dl className="quiz-summary">
            <div>
              <dt>小測題數</dt>
              <dd>{newQuizQuestions.length}</dd>
            </div>
            <div>
              <dt>第一次答對題數</dt>
              <dd>{firstCorrectCount}</dd>
            </div>
            <div>
              <dt>原始答錯題數</dt>
              <dd>{wrongQuestions.length}</dd>
            </div>
            <div>
              <dt>錯題補救答對題數</dt>
              <dd>{rescueCorrectCount}</dd>
            </div>
            <div>
              <dt>錯題補救仍答錯題數</dt>
              <dd>{rescueWrongCount}</dd>
            </div>
          </dl>
          <button
            className="quiz-primary-button"
            type="button"
            onClick={onReturnHome}
          >
            回首頁
          </button>
        </section>
      </main>
    )
  }

  return (
    <main className="page quiz-page">
      <section className="quiz-card" aria-labelledby="quiz-question">
        <div className="quiz-card__content">
          <header className="quiz-card__header">
            <p className="quiz-card__eyebrow">新單字小測驗</p>
            <p className="quiz-card__prompt">{currentQuestion.promptZh}</p>
            <h1 className="quiz-card__question" id="quiz-question">
              {currentQuestion.questionText}
            </h1>
          </header>

          <div className="quiz-options">
            {currentOptions.map((option) => {
              const isSelected = selectedAnswer === option
              const isCorrectOption = option === currentQuestion.correctAnswer
              const optionState = isAnswered
                ? isCorrectOption
                  ? 'correct'
                  : isSelected
                    ? 'wrong'
                    : 'inactive'
                : 'ready'

              return (
                <button
                  className={`quiz-option quiz-option--${optionState}`}
                  type="button"
                  key={option}
                  disabled={isAnswered}
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </button>
              )
            })}
          </div>

          {isAnswered && (
            <div
              className={`quiz-feedback ${
                isCorrect
                  ? 'quiz-feedback--correct'
                  : 'quiz-feedback--wrong'
              }`}
              role="status"
            >
              <p className="quiz-feedback__result">
                {isCorrect ? '答對了' : '答錯了'}
              </p>
              {!isCorrect && (
                <>
                  <p className="quiz-feedback__answer">
                    正確答案：{currentQuestion.correctAnswer}
                  </p>
                  <p className="quiz-feedback__explanation">
                    {currentQuestion.explanationZh}
                  </p>
                </>
              )}
            </div>
          )}
        </div>

        {isAnswered && !isCorrect && (
          <button
            className="quiz-primary-button"
            type="button"
            onClick={handleNext}
          >
            {currentIndex === newQuizQuestions.length - 1
              ? '查看結果'
              : '下一題'}
          </button>
        )}
      </section>
    </main>
  )
}
