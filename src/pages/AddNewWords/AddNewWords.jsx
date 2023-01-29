import { useSelector, useDispatch } from 'react-redux';
import { AddNewWordForm } from "../../components"
import { getDictionary, addWord } from '../../store/dictionary'
import { isDuplicate } from '../../utils';


export default function AddNewWords() {
  const dictionary = useSelector(getDictionary)
  const dispatch = useDispatch()

  const handleSubmit = (newWord) => {
    if (isDuplicate(newWord.word, dictionary)){
      return console.log(`dublicate ${newWord.word}`)
    }
    dispatch(addWord(newWord))
  }

    return (
      <div>
        {console.log(dictionary)}
        <AddNewWordForm addNewWord={handleSubmit}/>
      </div>
    )
}
