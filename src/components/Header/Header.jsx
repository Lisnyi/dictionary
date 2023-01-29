import { NavLink } from "react-router-dom"

export default function Header() {

  return (
    <header>
        <div>
          <nav>
              <NavLink to="/" end>Головна</NavLink>
              <NavLink to="/new-words">Додати нове слово</NavLink>
              <NavLink to="/testing">Тестування</NavLink>
          </nav>
        </div>
    </header>
  )
}
