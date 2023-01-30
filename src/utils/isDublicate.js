export function isDuplicate(word, dictionary) {
    const normalizedWord = word.toLocaleLowerCase()
    return dictionary.find((w) => w.word.toLocaleLowerCase() === normalizedWord)
}