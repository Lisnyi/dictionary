import { Heading } from '@chakra-ui/react'

export function MainTitle({children, ...rest}) {
    return (
        <Heading
            textAlign='center'
            textTransform='uppercase'
            mb={4}
            {...rest}
        >
                {children}
        </Heading>
    )
}
