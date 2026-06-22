interface PlaceholderPageProps {
  title: string
  onBack: () => void
}

export function PlaceholderPage({ title, onBack }: PlaceholderPageProps) {
  return (
    <main className="page placeholder-page">
      <section className="placeholder-card">
        <h1>{title}</h1>
        <p>此功能將於後續階段建立。</p>
        <button className="back-button" type="button" onClick={onBack}>
          返回首頁
        </button>
      </section>
    </main>
  )
}
