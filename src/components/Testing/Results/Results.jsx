import { getSuccessRate } from "../../../utils"

export default function Results({correctAnswers, wrongAnswers}) {

  const rate = getSuccessRate(correctAnswers, wrongAnswers)
  
  return (
    <>
      <h1>Результати</h1>
      <b>Відсоток успішності: {rate}%</b>
    </>
  )
}
