import { useState, useMemo } from 'react'
import { getRandomArrayElements } from '../../utils'
import { OneTest, Results } from './index' 

export function Testing({wordsList}) {
    const testWords = useMemo(() => getRandomArrayElements(wordsList), [wordsList])
    const [currentTest, setCurrentTest] = useState(0)
    const [correctAnswers, setCorrectAnswers] = useState(0)
    const [wrongAnswers, setWrongAnswers] = useState(0)

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
        (currentTest < 10)
            ?   testWords.map((test, index) => <OneTest
                    key={test.id}
                    item={test}
                    currentTest={currentTest === index}
                    nextTest={nextTest}
                    addCorrectAnswer={addCorrectAnswer}
                    addWrongAnswer={addWrongAnswer}
                    dictionary={wordsList}/>)
            :   <Results
                    correctAnswers={correctAnswers}
                    wrongAnswers={wrongAnswers}
                />
    )
}
