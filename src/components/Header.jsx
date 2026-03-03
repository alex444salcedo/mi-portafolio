import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="main-header">
      <div className="container header-flex">
        <Link to="/" className="logo">
          Alejandro <span> Salcedo </span>
        </Link>
        <nav className="nav-links">
          <Link to="/">Inicio</Link>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contacto</a>
        </nav>
      </div>
    </header>
  )
}

export default Header