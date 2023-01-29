import { useState, useMemo } from 'react'
import { getRandomArrayElements } from '../../utils'
import OneTest from './OneTest/OneTest' 

export default function Testing({wordsList}) {
    const testWords = useMemo(() => getRandomArrayElements(wordsList), [wordsList])
    const [currentTest, setCurrentTest] = useState(0)
    const [correctAnswers, setCorrectAnswers] = useState(0)
    const [wrongAnswers, setWrongAnswers] = useState(0)

    console.log(correctAnswers)
    console.log(wrongAnswers)

    function nextTest(){
        setCurrentTest(currentTest + 1)
    }

    function addCorrectAnswer() {
        setCorrectAnswers(correctAnswers + 1)
    }

    function addWrongAnswer() {
        setWrongAnswers(wrongAnswers + 1)
    }

    return (
        testWords.map((test, index) => <OneTest
                                key={test.id}
                                item={test}
                                currentTest={currentTest === index}
                                nextTest={nextTest}
                                addCorrectAnswer={addCorrectAnswer}
                                addWrongAnswer={addWrongAnswer}
                                dictionary={wordsList}/>)
    )
}
