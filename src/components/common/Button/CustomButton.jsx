import { Button } from '@chakra-ui/react'

export function CustomButton({children, ...rest}) {
    return (
        <Button
            size='md'
            colorScheme='blue'
            {...rest}
        >
            {children}
        </Button>
    )
}
