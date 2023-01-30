import {
    Tr,
    Td
  } from '@chakra-ui/react'

export function TableRow({element}) {
    const {word, translate} = element
    
    return (
        <Tr>
            <Td
                textTransform='capitalize'
                textAlign='center'
                fontSize="lg">
                    {word}
            </Td>
            <Td
                textTransform='capitalize'
                textAlign='center'
                fontSize="lg">
                    {translate}
            </Td>
        </Tr>
    )
}
