import { Box } from '@chakra-ui/react'

export function Container({children, ...rest}) {
    return (
        <Box
            p='0 40px'
            m='0 auto'
            {...rest}
        >
            {children}
        </Box>
    )
}
