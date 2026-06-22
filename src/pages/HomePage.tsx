import type { AppView } from '../App'
import { StudyAction } from '../components/StudyAction'
import type { UserWordProgress } from '../data/types'
import {
  isProgressDue,
  type ActiveReviewStage,
} from '../utils/progress'

interface HomePageProps {
  userWordProgress: UserWordProgress[]
  unlearnedWordCount: number
  newWordBatchSize: number
  onNavigate: (view: AppView) => void
  onStartNewWords: () => void
  onMakeReviewStageDue: (stage: ActiveReviewStage) => void
  onMakeAllReviewsDue: () => void
  onResetProgress: () => void
}

export function HomePage({
  userWordProgress,
  unlearnedWordCount,
  newWordBatchSize,
  onNavigate,
  onStartNewWords,
  onMakeReviewStageDue,
  onMakeAllReviewsDue,
  onResetProgress,
}: HomePageProps) {
  const reviewCount = userWordProgress.filter((progress) =>
    isProgressDue(progress),
  ).length

  return (
    <main className="page home-page">
      <section className="home-card" aria-labelledby="page-title">
        <h1 id="page-title">今日學習</h1>

        <div className="study-actions">
          <StudyAction
            label="新單字"
            description={
              unlearnedWordCount > 0
                ? `可學 ${newWordBatchSize} 個`
                : '目前沒有新的單字'
            }
            detail={
              unlearnedWordCount > 0
                ? `剩餘未學 ${unlearnedWordCount} 個`
                : undefined
            }
            onClick={onStartNewWords}
          />
          <StudyAction
            label="複習"
            description={`今天 ${reviewCount} 個`}
            onClick={() => onNavigate('review')}
          />
        </div>

        <aside className="qa-tools" aria-labelledby="qa-tools-title">
          <p className="qa-tools__title" id="qa-tools-title">
            測試工具
          </p>
          <p className="qa-tools__note">僅供本機 MVP 自測</p>
          <div className="qa-tools__actions">
            <button type="button" onClick={() => onMakeReviewStageDue('B')}>
              讓所有 B 階段複習到期
            </button>
            <button type="button" onClick={() => onMakeReviewStageDue('A')}>
              讓所有 A 階段複習到期
            </button>
            <button type="button" onClick={() => onMakeReviewStageDue('C')}>
              讓所有 C 階段複習到期
            </button>
            <button type="button" onClick={onMakeAllReviewsDue}>
              讓所有 B / A / C 複習全部到期
            </button>
          </div>

          <button
            className="reset-progress-button"
            type="button"
            onClick={onResetProgress}
          >
            重置學習資料
          </button>
        </aside>
      </section>
    </main>
  )
}
