import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      {/* Sección Hero */}
      <section className="hero">
        <div className="container">
          <p className="hero-greeting">👋 Hola, soy</p>
          <h1 className="hero-name">Alejandro Salcedo Álvarez</h1>
          <h2 className="hero-role">
            Desarrollador Full Stack
            <span className="role-emphasis"> con énfasis en Frontend</span>
          </h2>
          <p className="hero-description">
            Estudiante de Ingeniería en Desarrollo y Gestión de Software en la Universidad Tecnológica de Aguascalientes.
            Apasionado por crear soluciones digitales funcionales.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn">Ver Proyectos</a>
            <a href="#contact" className="btn btn-outline">Contacto</a>
          </div>
        </div>
      </section>

      {/* Sección de Tecnologías */}
      <section className="skills section">
        <div className="container">
          <h2>Tecnologías y Herramientas</h2>
          <div className="skills-container">
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skills-list">
                <div className="skill-item"><span>⚛️</span> React.js</div>
                <div className="skill-item"><span>🎨</span> CSS3</div>
                <div className="skill-item"><span>📜</span> JavaScript</div>
                <div className="skill-item"><span>⚡</span> Vite</div>
              </div>
            </div>

            <div className="skill-category">
              <h3>Backend & DB</h3>
              <div className="skills-list">
                <div className="skill-item"><span>🐘</span> PHP</div>
                <div className="skill-item"><span>🗄️</span> SQL / MySQL</div>
                <div className="skill-item"><span>🔗</span> REST APIs</div>
              </div>
            </div>

            <div className="skill-category">
              <h3>Herramientas</h3>
              <div className="skills-list">
                <div className="skill-item"><span>🐙</span> GitHub</div>
                <div className="skill-item"><span>📐</span> Scrum / Agile</div>
                <div className="skill-item"><span>🚀</span> Vercel</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Proyectos (Los 7 completos) */}
      <section id="projects" className="projects section">
        <div className="container">
          <h2>Proyectos</h2>
          <div className="projects-grid">

            <Link to="/proyecto/purificadora" className="project-card">
              <span className="project-category">Web Informativa</span>
              <h3>Purificadora de Agua</h3>
              <p>Catálogo y contacto con validación de formularios.</p>
              <div className="project-tech">
                <span className="badge">React</span>
                <span className="badge">CSS3</span>
              </div>
              <div className="project-link">Ver detalles →</div>
            </Link>

            <Link to="/proyecto/practicas-uta" className="project-card">
              <span className="project-category">Sistema de Gestión</span>
              <h3>Sistema de Prácticas (UTA)</h3>
              <p>Gestión de alumnos, empresas y proyectos de estadía.</p>
              <div className="project-tech">
                <span className="badge">React</span>
                <span className="badge">Mock Data</span>
              </div>
              <div className="project-link">Ver detalles →</div>
            </Link>

            <Link to="/proyecto/pos-maindsoft" className="project-card">
              <span className="project-category">Software Empresarial</span>
              <h3>Punto de Venta (Maindsoft)</h3>
              <p>Sistema desarrollado para el control de inventarios y métricas en tiempo real.</p>
              <div className="project-tech">
                <span className="badge">React</span>
                <span className="badge">Recharts</span>
              </div>
              <div className="project-link">Ver detalles →</div>
            </Link>

            <Link to="/proyecto/plant-care" className="project-card">
              <span className="project-category">App Móvil / Web</span>
              <h3>PlantCare Tracker</h3>
              <p>Gestión para el cuidado de plantas con recordatorios inteligentes.</p>
              <div className="project-tech">
                <span className="badge">React</span>
                <span className="badge">LocalStorage</span>
              </div>
              <div className="project-link">Ver detalles →</div>
            </Link>

            <Link to="/proyecto/papeleria" className="project-card">
              <span className="project-category">Sistema de Ventas</span>
              <h3>Punto de Venta Papelería</h3>
              <p>Software integral con gestión de inventario y generación de tickets.</p>
              <div className="project-tech">
                <span className="badge">React</span>
                <span className="badge">UI Dinámica</span>
              </div>
              <div className="project-link">Ver detalles →</div>
            </Link>

            <Link to="/proyecto/finanzas" className="project-card">
              <span className="project-category">Fintech / Dashboard</span>
              <h3>Finanzas Personales</h3>
              <p>App para gestión de ingresos y gastos con visualización de balance.</p>
              <div className="project-tech">
                <span className="badge">React</span>
                <span className="badge">Recharts</span>
              </div>
              <div className="project-link">Ver detalles →</div>
            </Link>

            <Link to="/proyecto/veterinaria" className="project-card">
              <span className="project-category">Landing Page & Booking</span>
              <h3>VetCare Central</h3>
              <p>Sitio web para clínica veterinaria con sistema de agendamiento.</p>
              <div className="project-tech">
                <span className="badge">React</span>
                <span className="badge">UX/UI</span>
              </div>
              <div className="project-link">Ver detalles →</div>
            </Link>

          </div>
        </div>
      </section>

      {/* Sección de Contacto con Iconos Nuevos */}
      <section id="contact" className="contact section">
        <div className="container">
          <h2>Contacto</h2>
          <div className="contact-methods">
            {/* Outlook */}
            <a href="mailto:alex444salcedo@outlook.com" className="contact-item email-link">
              <span className="contact-icon email-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="22" height="22" fill="currentColor">
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                </svg>
              </span>
              <span>alex444salcedo@outlook.com</span>
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/524493639260" className="contact-item whatsapp-link" target="_blank" rel="noopener noreferrer">
              <span className="contact-icon whatsapp-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="22" height="22" fill="currentColor">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.4-11.3 2.5-2.4 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.5-9.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
              </span>
              <span>449-363-92-60</span>
            </a>

            {/* Computrabajo */}
            <a href="https://candidato.mx.computrabajo.com/candidate/cv/edit/" className="contact-item computrabajo-link" target="_blank" rel="noopener noreferrer">
              <span className="contact-icon computrabajo-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="22" height="22" fill="currentColor">
                  <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 48V56c0-30.9 25.1-56 56-56H328c30.9 0 56 25.1 56 56V96h80c26.5 0 48 21.5 48 48V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V144c0-26.5 21.5-48 48-48h80zM352 208c0-8.8-7.2-16-16-16H176c-8.8 0-16 7.2-16 16s7.2 16 16 16H336c8.8 0 16-7.2 16-16z"/>
                </svg>
              </span>
              <span>Mi perfil en Computrabajo</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home;