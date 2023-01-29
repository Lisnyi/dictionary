import { Button } from '@chakra-ui/react'

export default function CustomButton({children, ...rest}) {
  return (
    <Button
        size='md'
        colorScheme='blue'
        {...rest}>
        {children}
    </Button>
  )
}
