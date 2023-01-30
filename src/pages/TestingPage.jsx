import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getDictionary } from '../store'
import { Testing, CustomButton, Section, Container } from '../components'
import { useState } from 'react'
import { Text } from '@chakra-ui/react'

export default function TestingPage() {
    const dictionary = useSelector(getDictionary)
    const navigate = useNavigate()
    const [start, setStart] = useState(false)
    const minDictionatyLength = 10

    function navigateToNewWords() {
        navigate("/new-words");
    }

    return (
        <Container>
            <Section textAlign='center'>
                {(dictionary.length < minDictionatyLength)
                    ?   <>
                            <Text
                                mb={4}
                                fontSize='xl'>
                                В словнику {dictionary.length} слів, додай ще кілька (мінімум - {minDictionatyLength})
                            </Text>
                            <CustomButton onClick={navigateToNewWords}>Додати слова</CustomButton>
                        </>
                    :   start 
                            ? <Testing wordsList={dictionary}/>
                            : <CustomButton onClick={()=>setStart(true)}>Повторити слова</CustomButton>}
            </Section>
        </Container>
    )
}