import { useCallback, useEffect, useState } from 'react'
import type { QuizQuestion } from '../data/types'
import { shuffleItems } from '../utils/array'

interface MistakeRescuePageProps {
  questions: QuizQuestion[]
  onComplete: (results: MistakeRescueResult[]) => void
}

export interface MistakeRescueResult {
  wordId: string
  correct: boolean
}

export function MistakeRescuePage({
  questions,
  onComplete,
}: MistakeRescuePageProps) {
  const [optionsByQuestionId] = useState(
    () =>
      new Map(
        questions.map((question) => [
          question.id,
          shuffleItems(question.options),
        ]),
      ),
  )
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [results, setResults] = useState<MistakeRescueResult[]>([])

  const currentQuestion = questions[currentIndex]
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
    setResults((currentResults) => [
      ...currentResults,
      {
        wordId: currentQuestion.wordId,
        correct: answer === currentQuestion.correctAnswer,
      },
    ])
  }

  const handleNext = useCallback(() => {
    if (!isAnswered) {
      return
    }

    if (currentIndex === questions.length - 1) {
      onComplete(results)
      return
    }

    setCurrentIndex((index) => index + 1)
    setSelectedAnswer(null)
  }, [currentIndex, isAnswered, onComplete, questions.length, results])

  useEffect(() => {
    if (!isCorrect) {
      return
    }

    const timer = window.setTimeout(handleNext, 250)

    return () => window.clearTimeout(timer)
  }, [handleNext, isCorrect])

  if (!currentQuestion) {
    return null
  }

  return (
    <main className="page quiz-page">
      <section className="quiz-card" aria-labelledby="rescue-question">
        <div className="quiz-card__content">
          <header className="quiz-card__header">
            <p className="quiz-card__eyebrow">今日錯題補救</p>
            <p className="quiz-card__prompt">{currentQuestion.promptZh}</p>
            <h1 className="quiz-card__question" id="rescue-question">
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
                {isCorrect ? '補救答對' : '補救仍答錯'}
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
            {currentIndex === questions.length - 1 ? '完成補救' : '下一題'}
          </button>
        )}
      </section>
    </main>
  )
}
