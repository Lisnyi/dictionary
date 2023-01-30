import { getRandomArrayElements, getRandomInt } from './index'

export function createVariants(list, correct) {
    const answers = getRandomArrayElements(list, correct, 3)
    const index = getRandomInt(3)
    answers.splice(index, 0, correct)
    return answers
}