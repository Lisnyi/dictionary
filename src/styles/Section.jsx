import { Box } from '@chakra-ui/react'

export default function Section({children, ...rest}) {
  return (
    <Box
        p='15px 0'
        {...rest}
    >
        {children}
    </Box>
  )
}
