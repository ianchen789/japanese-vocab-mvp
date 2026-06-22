import { useState } from 'react'
import { HighlightedJapaneseText } from '../components/HighlightedJapaneseText'
import { phrases, sentences } from '../data/mockData'
import type { Word } from '../data/types'

interface NewWordLearningPageProps {
  batchWords: Word[]
  onComplete: () => void
  onReturnHome: () => void
}

function createLearningCards(batchWords: Word[]) {
  return batchWords.map((word) => {
    const wordPhrases = phrases
      .filter((phrase) => phrase.wordId === word.id)
      .sort(
        (firstPhrase, secondPhrase) =>
          firstPhrase.usageOrder - secondPhrase.usageOrder,
      )
      .slice(0, 3)

    const learningSentence = sentences.find(
      (sentence) =>
        sentence.wordId === word.id && sentence.sentenceType === 'learning',
    )

    if (!learningSentence) {
      throw new Error(`Missing learning sentence for word: ${word.id}`)
    }

    return {
      word,
      phrases: wordPhrases,
      sentence: learningSentence,
    }
  })
}

export function NewWordLearningPage({
  batchWords,
  onComplete,
  onReturnHome,
}: NewWordLearningPageProps) {
  const [learningCards] = useState(() => createLearningCards(batchWords))
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentCard = learningCards[currentIndex]

  if (!currentCard) {
    return (
      <main className="page new-word-page">
        <section className="word-card">
          <p className="word-card__empty">目前沒有可學習的新單字。</p>
          <button
            className="word-card__next"
            type="button"
            onClick={onReturnHome}
          >
            回首頁
          </button>
        </section>
      </main>
    )
  }

  const isLastCard = currentIndex === learningCards.length - 1

  const handleNext = () => {
    if (isLastCard) {
      onComplete()
      return
    }

    setCurrentIndex((index) => index + 1)
  }

  return (
    <main className="page new-word-page">
      <article className="word-card" aria-labelledby="current-word">
        <div className="word-card__content">
          <header className="word-card__header">
            <h1 className="word-card__word" id="current-word">
              {currentCard.word.wordJa}
            </h1>
            <p className="word-card__kana">{currentCard.word.kana}</p>
            <p className="word-card__meaning">
              {currentCard.word.meaningZh}
            </p>
          </header>

          <ul className="word-card__phrases">
            {currentCard.phrases.map((phrase) => (
              <li key={phrase.id}>
                <p className="word-card__phrase-ja">
                  <HighlightedJapaneseText
                    text={phrase.phraseFurigana}
                    targetWord={currentCard.word.wordJa}
                  />
                </p>
                <p className="word-card__phrase-meaning">
                  {phrase.meaningZh}
                </p>
              </li>
            ))}
          </ul>

          <div className="word-card__sentence">
            <p className="word-card__sentence-ja">
              <HighlightedJapaneseText
                text={currentCard.sentence.sentenceFurigana}
                targetWord={currentCard.word.wordJa}
              />
            </p>
            <p className="word-card__sentence-meaning">
              {currentCard.sentence.meaningZh}
            </p>
          </div>
        </div>

        <button className="word-card__next" type="button" onClick={handleNext}>
          {isLastCard ? '完成' : '下一個'}
        </button>
      </article>
    </main>
  )
}
