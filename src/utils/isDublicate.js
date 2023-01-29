export function isDuplicate(word, dictionary) {
    const normalizedWord = word.toLocaleLowerCase()
    const result = dictionary.find((w) => w.word.toLocaleLowerCase() === normalizedWord)
    return result
}