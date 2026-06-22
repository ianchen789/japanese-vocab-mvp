export function toLocalIsoDate(date: Date = new Date()) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

export function addDays(date: Date, days: number) {
  const nextDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + days,
  )

  return toLocalIsoDate(nextDate)
}

export function isDue(
  nextReviewAt: string | null,
  today: string = toLocalIsoDate(),
) {
  return nextReviewAt !== null && nextReviewAt <= today
}
