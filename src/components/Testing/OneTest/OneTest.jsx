import { useMemo } from 'react'
import { createVariants } from '../../../utils'
import { CustomButton } from '../../../components'
import { Text, Box, Grid } from '@chakra-ui/react'

export function OneTest({item, dictionary, currentTest, nextTest, addCorrectAnswer, addWrongAnswer}) {
    const {word} = item

    const variants = useMemo(() => createVariants(dictionary, item), [dictionary, item])

    function checkAnswer(answer) {
        if (answer === item.translate){
            addCorrectAnswer()
            nextTest()
            return
        }
        addWrongAnswer()
        nextTest()
        return
    } 

    return (
        currentTest &&  <Box>
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
