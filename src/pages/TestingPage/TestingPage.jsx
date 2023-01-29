import { useSelector } from 'react-redux';
import { getDictionary } from '../../store/dictionary'
import { Testing } from '../../components'

export default function TestingPage() {
  const dictionary = useSelector(getDictionary)
  const minDictionatyLength = 10

  return (
    dictionary.length < minDictionatyLength
      ? <p>В словнику {dictionary.length} слів, Додай ще кілька (мінімум - {minDictionatyLength})</p>
      : <Testing wordsList={dictionary}/>
  )
}
