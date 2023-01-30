import { Section, Container, CustomLink } from '../index'
import { Box } from '@chakra-ui/react'

export function Header() {
    return (
        <Section as='header'>
            <Container>
            <Box
                as='nav'
                display='flex'
                justifyContent='center'
                >
                    <CustomLink 
                        to="/"
                        end>
                            Головна
                    </CustomLink>
                    <CustomLink  
                        to="/new-words">
                            Додати нове слово
                    </CustomLink>
                    <CustomLink 
                        to="/testing"
                        mr='0'>
                            Тестування
                    </CustomLink>
            </Box>
            </Container>
        </Section>
    )
}
