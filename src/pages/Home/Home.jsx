import { useSelector } from 'react-redux';
import { DictionaryTable } from "../../components"
import { getDictionary } from '../../store/dictionary'
import { Container, Section, MainTitle } from '../../styles';

export default function Home() {
  const dictionary = useSelector(getDictionary)

  return (
    <Container>
      <Section>
      <MainTitle>Словник</MainTitle>
      {dictionary.length
        ? <DictionaryTable dictionary={dictionary}/>
        : <p>В словнику немає слів</p>}
      </Section>
    </Container>
  )
}
