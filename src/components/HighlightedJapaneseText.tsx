interface HighlightedJapaneseTextProps {
  text: string
  targetWord: string
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function createTargetPattern(targetWord: string) {
  const trailingKana = targetWord.match(/[ぁ-ゖー]+$/)?.[0] ?? ''
  const wordStem = trailingKana
    ? targetWord.slice(0, -trailingKana.length)
    : targetWord

  if (!wordStem && targetWord.length > 1) {
    return new RegExp(
      `${escapeRegExp(targetWord.slice(0, -1))}[ぁ-ゖー]*`,
    )
  }

  const tokens = wordStem.match(/[\p{Script=Han}々]+|./gu) ?? []
  const stemPattern = tokens
    .map((token) =>
      /[\p{Script=Han}々]/u.test(token)
        ? `${escapeRegExp(token)}(?:（[^）]+）)?`
        : escapeRegExp(token),
    )
    .join('')

  return trailingKana
    ? new RegExp(`${stemPattern}[ぁ-ゖー]*`)
    : new RegExp(stemPattern)
}

export function HighlightedJapaneseText({
  text,
  targetWord,
}: HighlightedJapaneseTextProps) {
  const match = text.match(createTargetPattern(targetWord))

  if (!match || match.index === undefined) {
    return <>{text}</>
  }

  const matchStart = match.index
  const matchEnd = matchStart + match[0].length

  return (
    <>
      {text.slice(0, matchStart)}
      <strong className="word-card__target">{match[0]}</strong>
      {text.slice(matchEnd)}
    </>
  )
}
