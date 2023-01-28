import { NavLink } from "react-router-dom"

export default function Header() {

  return (
    <header>
        <div>
          <nav>
              <NavLink to="/" end>Dictionary</NavLink>
              <NavLink to="/new-words">Add new words</NavLink>
              <NavLink to="/testing">Testing</NavLink>
          </nav>
        </div>
    </header>
  )
}
