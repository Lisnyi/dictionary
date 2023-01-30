import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { DictionaryTable, Container, Section, MainTitle, CustomButton } from '../../components'
import { getDictionary } from '../../store'
import { Box, Text } from '@chakra-ui/react'

export default function Home() {
    const dictionary = useSelector(getDictionary)
    const navigate = useNavigate()

    function navigateToNewWords() {
        navigate("/new-words");
    }

    return (
        <Container>
            <Section>
            <MainTitle>Словник</MainTitle>
            {dictionary.length
                ? <DictionaryTable dictionary={dictionary}/>
                : <Box textAlign='center'>
                    <Text mb={4} fontSize='xl'>В словнику немає слів</Text>
                    <CustomButton onClick={navigateToNewWords}>Додати слова</CustomButton>
                </Box>}
            </Section>
        </Container>
  )
}
