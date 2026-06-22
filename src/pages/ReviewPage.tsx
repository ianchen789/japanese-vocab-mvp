import { useCallback, useEffect, useState } from 'react'
import { quizQuestions, words } from '../data/mockData'
import type {
  QuestionType,
  QuizQuestion,
  UserWordProgress,
} from '../data/types'
import {
  isProgressDue,
  type ActiveReviewStage,
} from '../utils/progress'
import { shuffleItems } from '../utils/array'
import { normalizeSentenceAnswer } from '../utils/text'

interface ReviewPageProps {
  userWordProgress: UserWordProgress[]
  onProgressUpdate: (
    wordId: string,
    stage: ActiveReviewStage,
    correct: boolean,
  ) => void
  onReturnHome: () => void
}

interface ReviewItem {
  stage: ActiveReviewStage
  question: QuizQuestion
  options: string[]
  sortOrder: number
}

const questionTypeByStage: Record<ActiveReviewStage, QuestionType> = {
  B: 'reviewB',
  A: 'reviewA',
  C: 'reviewC',
}

const wordSortOrder = new Map(words.map((word) => [word.id, word.sortOrder]))

export function ReviewPage({
  userWordProgress,
  onProgressUpdate,
  onReturnHome,
}: ReviewPageProps) {
  const [reviewItems] = useState<ReviewItem[]>(() =>
    userWordProgress
      .filter(
        (
          progress,
        ): progress is typeof progress & { reviewStage: ActiveReviewStage } =>
          isProgressDue(progress),
      )
      .map((progress) => {
        const expectedQuestionType =
          questionTypeByStage[progress.reviewStage]
        const question = quizQuestions.find(
          (candidate) =>
            candidate.wordId === progress.wordId &&
            candidate.questionType === expectedQuestionType,
        )

        if (!question) {
          throw new Error(
            `Missing ${expectedQuestionType} question for word: ${progress.wordId}`,
          )
        }

        return {
          stage: progress.reviewStage,
          question,
          options:
            question.questionType === 'reviewC'
              ? question.options
              : shuffleItems(question.options),
          sortOrder: wordSortOrder.get(progress.wordId) ?? 0,
        }
      })
      .sort(
        (firstItem, secondItem) =>
          firstItem.sortOrder - secondItem.sortOrder,
      ),
  )
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [selectedFragments, setSelectedFragments] = useState<string[]>([])
  const [isAnswered, setIsAnswered] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [wrongCount, setWrongCount] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const currentItem = reviewItems[currentIndex]
  const currentQuestion = currentItem?.question
  const isCorrect = currentQuestion
    ? currentItem.stage === 'C'
      ? isAnswered &&
        normalizeSentenceAnswer(selectedFragments.join('')) ===
          normalizeSentenceAnswer(currentQuestion.correctAnswer)
      : isAnswered && selectedAnswer === currentQuestion.correctAnswer
    : false

  const recordResult = (correct: boolean) => {
    setIsAnswered(true)
    onProgressUpdate(
      currentItem.question.wordId,
      currentItem.stage,
      correct,
    )

    if (correct) {
      setCorrectCount((count) => count + 1)
    } else {
      setWrongCount((count) => count + 1)
    }
  }

  const handleOptionAnswer = (answer: string) => {
    if (isAnswered || !currentQuestion || currentItem.stage === 'C') {
      return
    }

    setSelectedAnswer(answer)
    recordResult(answer === currentQuestion.correctAnswer)
  }

  const handleFragmentSelect = (fragment: string) => {
    if (isAnswered) {
      return
    }

    setSelectedFragments((fragments) => [...fragments, fragment])
  }

  const handleFragmentRemove = (indexToRemove: number) => {
    if (isAnswered) {
      return
    }

    setSelectedFragments((fragments) =>
      fragments.filter((_, index) => index !== indexToRemove),
    )
  }

  const handleFragmentSubmit = () => {
    if (
      isAnswered ||
      !currentQuestion ||
      currentItem.stage !== 'C' ||
      selectedFragments.length !== currentQuestion.fragments.length
    ) {
      return
    }

    const answer = normalizeSentenceAnswer(selectedFragments.join(''))
    recordResult(
      answer === normalizeSentenceAnswer(currentQuestion.correctAnswer),
    )
  }

  const handleNext = useCallback(() => {
    if (!isAnswered) {
      return
    }

    if (currentIndex === reviewItems.length - 1) {
      setIsComplete(true)
      return
    }

    setCurrentIndex((index) => index + 1)
    setSelectedAnswer(null)
    setSelectedFragments([])
    setIsAnswered(false)
  }, [currentIndex, isAnswered, reviewItems.length])

  useEffect(() => {
    if (!isCorrect) {
      return
    }

    const timer = window.setTimeout(handleNext, 250)

    return () => window.clearTimeout(timer)
  }, [handleNext, isCorrect])

  if (isComplete) {
    return (
      <main className="page quiz-completion-page">
        <section
          className="quiz-completion-card"
          aria-labelledby="review-complete"
        >
          <h1 id="review-complete">複習完成</h1>
          <dl className="quiz-summary">
            <div>
              <dt>複習題數</dt>
              <dd>{reviewItems.length}</dd>
            </div>
            <div>
              <dt>答對題數</dt>
              <dd>{correctCount}</dd>
            </div>
            <div>
              <dt>答錯題數</dt>
              <dd>{wrongCount}</dd>
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

  if (!currentItem || !currentQuestion) {
    return (
      <main className="page quiz-completion-page">
        <section className="quiz-completion-card">
          <h1>今天沒有需要複習的單字</h1>
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
      <section
        className="quiz-card"
        aria-label={`${currentItem.stage} 複習`}
      >
        <div className="quiz-card__content">
          <header className="quiz-card__header">
            <p className="quiz-card__eyebrow">{currentItem.stage} 複習</p>
            <p className="quiz-card__prompt">{currentQuestion.promptZh}</p>
            {currentItem.stage === 'A' && (
              <h1 className="quiz-card__question" id="review-question">
                {currentQuestion.questionText}
              </h1>
            )}
            {currentItem.stage === 'C' && (
              <h1 className="quiz-card__question" id="review-question">
                {currentQuestion.questionText}
              </h1>
            )}
          </header>

          {currentItem.stage !== 'C' ? (
            <div className="quiz-options">
              {currentItem.options.map((option) => {
                const isSelected = selectedAnswer === option
                const isCorrectOption =
                  option === currentQuestion.correctAnswer
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
                    onClick={() => handleOptionAnswer(option)}
                  >
                    {option}
                  </button>
                )
              })}
            </div>
          ) : (
            <div className="sentence-builder">
              <div
                className="sentence-builder__answer"
                aria-label="目前排列的句子"
              >
                {selectedFragments.length === 0 ? (
                  <p>點選下方片段排列句子</p>
                ) : (
                  selectedFragments.map((fragment, index) => (
                    <button
                      type="button"
                      key={`${fragment}-${index}`}
                      disabled={isAnswered}
                      onClick={() => handleFragmentRemove(index)}
                    >
                      {fragment}
                    </button>
                  ))
                )}
              </div>

              <div className="sentence-builder__fragments">
                {currentQuestion.fragments.map((fragment, fragmentIndex) => {
                  const selectedCount = selectedFragments.filter(
                    (selectedFragment) => selectedFragment === fragment,
                  ).length
                  const availableCount = currentQuestion.fragments.filter(
                    (candidate) => candidate === fragment,
                  ).length
                  const isUnavailable = selectedCount >= availableCount

                  return (
                    <button
                      type="button"
                      key={`${fragment}-${fragmentIndex}`}
                      disabled={isAnswered || isUnavailable}
                      onClick={() => handleFragmentSelect(fragment)}
                    >
                      {fragment}
                    </button>
                  )
                })}
              </div>

              {!isAnswered && (
                <button
                  className="quiz-primary-button sentence-builder__submit"
                  type="button"
                  disabled={
                    selectedFragments.length !==
                    currentQuestion.fragments.length
                  }
                  onClick={handleFragmentSubmit}
                >
                  提交答案
                </button>
              )}
            </div>
          )}

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
            {currentIndex === reviewItems.length - 1 ? '查看結果' : '下一題'}
          </button>
        )}
      </section>
    </main>
  )
}
