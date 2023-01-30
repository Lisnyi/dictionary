import { useMemo } from 'react'
import { createVariants } from '../../../utils'
import { CustomButton } from '../..'
import { Text, Box, Grid } from '@chakra-ui/react'

export function FlashCard({item, dictionary, currentCard, nextCard, addCorrectAnswer, addWrongAnswer}) {
    const {word} = item

    const variants = useMemo(() => createVariants(dictionary, item), [dictionary, item])

    function checkAnswer(answer) {
        answer === item.translate ? addCorrectAnswer() : addWrongAnswer()
        nextCard()
        return
    } 

    return (
        currentCard &&  <Box>
                            <Text
                                fontSize='3xl' 
                                mb={4}
                                textTransform='capitalize'
                                fontWeight='bold'>
                                    {word}
                            </Text>
                            <Grid
                                width='504px'
                                templateColumns='1fr 1fr'
                                gap={6}
                                m='0 auto'
                                >
                                    {variants.map(({id, translate:answer}) =>
                                        <CustomButton
                                            key={id}
                                            onClick={() => checkAnswer(answer)}
                                            textTransform='capitalize'
                                            size='lg'
                                            width='240px'>
                                                {answer}
                                        </CustomButton>)}
                            </Grid>
                        </Box>
    )
}
