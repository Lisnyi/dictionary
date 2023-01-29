import { Heading } from '@chakra-ui/react'

export default function MainTitle({children, ...rest}) {
  return (
    <Heading
        textAlign='center'
        textTransform='uppercase'
        mb={4}>
            {children}
    </Heading>
  )
}
