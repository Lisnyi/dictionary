import { useState, useMemo } from 'react'
import { getRandomArrayElements } from '../../utils'
import { FlashCard, Results } from './index' 

export function Testing({wordsList}) {
    const testWords = useMemo(() => getRandomArrayElements(wordsList), [wordsList])
    const [currentCard, setCurrentCard] = useState(0)
    const [correctAnswers, setCorrectAnswers] = useState(0)
    const [wrongAnswers, setWrongAnswers] = useState(0)

    function nextCard(){
        setCurrentCard(currentCard + 1)
    }

    function addCorrectAnswer() {
        setCorrectAnswers(correctAnswers + 1)
    }

    function addWrongAnswer() {
        setWrongAnswers(wrongAnswers + 1)
    }

    function isEndTestind(current) {
        return current === 10
    }

    const endTest = useMemo(() => isEndTestind(currentCard), [currentCard])

    return (
        (!endTest)
            ?   testWords.map((test, index) => <FlashCard
                    key={test.id}
                    item={test}
                    currentCard={currentCard === index}
                    nextCard={nextCard}
                    addCorrectAnswer={addCorrectAnswer}
                    addWrongAnswer={addWrongAnswer}
                    dictionary={wordsList}/>)
            :   <Results
                    correctAnswers={correctAnswers}
                    wrongAnswers={wrongAnswers}
                />
    )
}
