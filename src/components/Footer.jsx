import './Footer.css'

function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Alejandro Salcedo</h3>
            <p>Ingeniero en Desarrollo de Software</p>
            <p>📍 Aguascalientes, México</p>
          </div>
          <div className="footer-links">
            <h4>Explorar</h4>
            <ul>
              <li><a href="#projects">Proyectos</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Alejandro Salcedo Álvarez. Hecho con React + Vite.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer