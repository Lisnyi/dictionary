import { useSelector, useDispatch } from 'react-redux'
import { AddNewWordForm, Section, Container } from '../components'
import { getDictionary, addWord } from '../store'
import { isDuplicate } from '../utils'
import { useToast } from '@chakra-ui/react'

export default function AddNewWords() {
    const dictionary = useSelector(getDictionary)
    const dispatch = useDispatch()
    const toast = useToast()

    const handleSubmit = (newWord) => {
        if (isDuplicate(newWord.word, dictionary)){
            return toast({
                title: `Слово ${newWord.word} вже є в словнику`,
                status: 'error',
                isClosable: true,
              })
        }
        dispatch(addWord(newWord))
        toast({
            title: `Слово ${newWord.word} успішно додано`,
            status: 'success',
            isClosable: true,
          })
    }

    return (
        <Container>
            <Section>
                <AddNewWordForm addNewWord={handleSubmit}/>
            </Section>
        </Container>
    )
}
