import { useSelector } from 'react-redux';
import { getDictionary } from '../../store/dictionary'
import { Testing } from '../../components'
import { useState } from 'react';

export default function TestingPage() {
  const dictionary = useSelector(getDictionary)
  const [start, setStart] = useState(false)
  const minDictionatyLength = 10

  return (

      (dictionary.length < minDictionatyLength)
      ? <p>В словнику {dictionary.length} слів, Додай ще кілька (мінімум - {minDictionatyLength})</p>
      : start 
        ? <Testing wordsList={dictionary}/>
        : <button onClick={()=>setStart(true)}>Повторити слова</button>

  )
}