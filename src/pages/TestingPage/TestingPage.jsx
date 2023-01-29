import { useSelector } from 'react-redux';
import { getDictionary } from '../../store/dictionary'
import { Testing } from '../../components'
import { useState } from 'react';
import { Button, Section, Container } from '../../styles';

export default function TestingPage() {
  const dictionary = useSelector(getDictionary)
  const [start, setStart] = useState(false)
  const minDictionatyLength = 10

  return (
    <Container>
      <Section textAlign='center'>
        {(dictionary.length < minDictionatyLength)
          ? <p>В словнику {dictionary.length} слів, Додай ще кілька (мінімум - {minDictionatyLength})</p>
          : start 
            ? <Testing wordsList={dictionary}/>
            : <Button onClick={()=>setStart(true)}>Повторити слова</Button>}
      </Section>
    </Container>
  )
}