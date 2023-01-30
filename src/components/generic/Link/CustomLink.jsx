import { Link } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

export function CustomLink({children, ...rest}) {
    return (
        <Link 
            as={NavLink}
            mr={8}
            fontSize='xl'
            fontWeight='bold'
            textTransform='uppercase'
            _hover={{ color: '#3182ce',
                        textDecoration: 'underline' }}
            _focus={{ color: '#3182ce',
                        textDecoration: 'underline' }}
            _activeLink={{ color: '#3182ce',
                        textDecoration: 'underline' }}
            {...rest}
            >
                {children}
        </Link>
    )
}