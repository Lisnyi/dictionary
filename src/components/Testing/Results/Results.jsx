import { getSuccessRate } from '../../../utils'
import { MainTitle } from '../../generic'
import { Text } from '@chakra-ui/react'

export function Results({correctAnswers, wrongAnswers}) {
    const rate = getSuccessRate(correctAnswers, wrongAnswers)
    
    return (
      <>
          <MainTitle>Результати</MainTitle>
          <Text>Відсоток успішності:</Text>
          <Text
              fontWeight='bold'
              fontSize='2xl'>
                  {rate}%
          </Text>
      </>
    )
}
