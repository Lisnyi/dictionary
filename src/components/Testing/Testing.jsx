import { getRandomArrayElements } from '../../utils'
import OneTest from './OneTest/OneTest' 

export default function Testing({wordsList}) {
    const testWords = getRandomArrayElements(wordsList)

    return (
        testWords.map(test => <OneTest
                                key={test.id}
                                item={test}
                                wrongAnswers={getRandomArrayElements(wordsList, test, 3)}/>)
    )
}
