interface StudyActionProps {
  label: string
  description: string
  detail?: string
  onClick: () => void
}

export function StudyAction({
  label,
  description,
  detail,
  onClick,
}: StudyActionProps) {
  return (
    <section className="study-action">
      <button className="study-action__button" type="button" onClick={onClick}>
        {label}
      </button>
      <p className="study-action__count">{description}</p>
      {detail && <p className="study-action__detail">{detail}</p>}
    </section>
  )
}
