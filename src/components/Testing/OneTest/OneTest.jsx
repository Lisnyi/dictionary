import { getRandomInt } from "../../../utils"

export default function OneTest({item, wrongAnswers}) {
    const {word} = item
    const index = getRandomInt(3)
    wrongAnswers.splice(index, 0, item)

    return (
        <div>
            <p>Обери правильний переклад слова <span>{word}</span></p>
            {wrongAnswers.map(({id, translate:wrongAnswer}) => <button key={id}>{wrongAnswer}</button>)}
        </div>
    )
}
