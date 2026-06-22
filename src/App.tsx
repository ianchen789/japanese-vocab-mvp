import { useEffect, useState } from 'react'
import {
  userWordProgress as initialUserWordProgress,
  words,
} from './data/mockData'
import type { UserWordProgress, Word } from './data/types'
import { HomePage } from './pages/HomePage'
import { NewWordLearningPage } from './pages/NewWordLearningPage'
import { NewWordQuizPage } from './pages/NewWordQuizPage'
import { ReviewPage } from './pages/ReviewPage'
import {
  applyNewWordQuizResults,
  applyReviewResult,
  type ActiveReviewStage,
  type NewWordProgressResult,
} from './utils/progress'
import {
  clearProgress,
  loadProgress,
  saveProgress,
} from './utils/storage'
import {
  getUnlearnedActiveWords,
  NEW_WORD_BATCH_SIZE,
} from './utils/newWords'
import {
  makeAllReviewsDue,
  makeReviewStageDue,
} from './utils/reviewTimeTravel'

export type AppView = 'home' | 'new-words' | 'new-word-quiz' | 'review'

function App() {
  const [currentView, setCurrentView] = useState<AppView>('home')
  const [userWordProgress, setUserWordProgress] = useState<UserWordProgress[]>(
    () => loadProgress(initialUserWordProgress),
  )
  const [newWordBatch, setNewWordBatch] = useState<Word[]>([])

  const unlearnedWords = getUnlearnedActiveWords(words, userWordProgress)

  useEffect(() => {
    saveProgress(userWordProgress)
  }, [userWordProgress])

  const resetProgress = () => {
    clearProgress()
    setUserWordProgress(
      initialUserWordProgress.map((progress) => ({ ...progress })),
    )
  }

  const updateNewWordProgress = (results: NewWordProgressResult[]) => {
    setUserWordProgress((progressItems) =>
      applyNewWordQuizResults(progressItems, results),
    )
  }

  const updateReviewProgress = (
    wordId: string,
    stage: ActiveReviewStage,
    correct: boolean,
  ) => {
    setUserWordProgress((progressItems) =>
      applyReviewResult(progressItems, wordId, stage, correct),
    )
  }

  const startNewWordBatch = () => {
    setNewWordBatch(unlearnedWords.slice(0, NEW_WORD_BATCH_SIZE))
    setCurrentView('new-words')
  }

  const makeStageDue = (stage: ActiveReviewStage) => {
    setUserWordProgress((progressItems) =>
      makeReviewStageDue(progressItems, stage),
    )
  }

  const makeAllDue = () => {
    setUserWordProgress((progressItems) =>
      makeAllReviewsDue(progressItems),
    )
  }

  if (currentView === 'new-words') {
    return (
      <NewWordLearningPage
        batchWords={newWordBatch}
        onComplete={() => setCurrentView('new-word-quiz')}
        onReturnHome={() => setCurrentView('home')}
      />
    )
  }

  if (currentView === 'new-word-quiz') {
    return (
      <NewWordQuizPage
        batchWords={newWordBatch}
        onProgressUpdate={updateNewWordProgress}
        onReturnHome={() => setCurrentView('home')}
      />
    )
  }

  if (currentView === 'review') {
    return (
      <ReviewPage
        userWordProgress={userWordProgress}
        onProgressUpdate={updateReviewProgress}
        onReturnHome={() => setCurrentView('home')}
      />
    )
  }

  return (
    <HomePage
      userWordProgress={userWordProgress}
      unlearnedWordCount={unlearnedWords.length}
      newWordBatchSize={Math.min(
        NEW_WORD_BATCH_SIZE,
        unlearnedWords.length,
      )}
      onNavigate={setCurrentView}
      onStartNewWords={startNewWordBatch}
      onMakeReviewStageDue={makeStageDue}
      onMakeAllReviewsDue={makeAllDue}
      onResetProgress={resetProgress}
    />
  )
}

export default App
