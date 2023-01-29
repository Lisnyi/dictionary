import { NavLink } from "react-router-dom"
import {Section, Container} from '../../styles'

export default function Header() {

  return (
    <Section as='header'>
        <Container>
          <nav>
              <NavLink to="/" end>Головна</NavLink>
              <NavLink to="/new-words">Додати нове слово</NavLink>
              <NavLink to="/testing">Тестування</NavLink>
          </nav>
        </Container>
    </Section>
  )
}
