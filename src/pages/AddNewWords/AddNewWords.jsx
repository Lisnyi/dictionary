import {AddNewWordForm} from "../../components"
import { useSelector, useDispatch } from 'react-redux';
import { getWords } from '../../store/words/words-selectors';
import { addWord } from '../../store/words/words-slice';

export default function AddNewWords() {
  const words = useSelector(getWords)
  const dispatch = useDispatch()

  const handleSubmit = (newWord) => {

    dispatch(addWord(newWord))
  }

    return (
      <div>
        {console.log(words)}
        <AddNewWordForm addNewWord={handleSubmit}/>
      </div>
    )
}
