export function normalizeSentenceAnswer(value: string) {
  return value
    .normalize('NFKC')
    .replace(/[\s\u3001\u3002\uff01\uff1f,.!?]/g, '')
}

export function splitSentenceIntoFragments(value: string) {
  const tokens =
    value.match(
      /[\p{Script=Han}々]+（[^）]+）|[ァ-ヿー]+|[A-Za-z0-9]+|[ぁ-ゖー]+|[、。！？,.!?]|./gu,
    ) ?? [value]

  return tokens.reduce<string[]>((fragments, token) => {
    if (/^\s+$/u.test(token)) {
      return fragments
    }

    if (/^[、。！？,.!?]$/u.test(token) && fragments.length > 0) {
      fragments[fragments.length - 1] += token
      return fragments
    }

    fragments.push(token)
    return fragments
  }, [])
}
