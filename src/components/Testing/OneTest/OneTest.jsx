import { useMemo } from 'react'
import { createVariants } from "../../../utils"

export default function OneTest({item, dictionary, currentTest, nextTest, addCorrectAnswer, addWrongAnswer}) {
    const {word} = item

    const variants = useMemo(() => createVariants(dictionary, item), [dictionary])

    function checkAnswer(answer) {
        if (answer === item.translate){
            addCorrectAnswer()
            nextTest()
            return
        }
        addWrongAnswer()
        nextTest()
        return
    } 

    return (
        currentTest &&  <div>
                            <p>{word}</p>
                            {variants.map(({id, translate:answer}) =>
                                <button
                                    key={id}
                                    onClick={() => checkAnswer(answer)}>
                                        {answer}
                                </button>)}
                        </div>
    )
}
