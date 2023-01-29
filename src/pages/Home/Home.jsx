import { useSelector } from 'react-redux';
import { DictionaryTable } from "../../components"
import { getDictionary } from '../../store/dictionary'

export default function Home() {
  const dictionary = useSelector(getDictionary)

  return (
    <div>
      <h1>Словник</h1>
      {dictionary.length
        ? <DictionaryTable dictionary={dictionary}/>
        : <p>В словнику немає слів</p>}
    </div>
  )
}
