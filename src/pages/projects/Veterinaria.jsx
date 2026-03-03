import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Veterinaria.css'

function Veterinaria() {
  const [cita, setCita] = useState({ mascota: '', dueño: '', fecha: '', servicio: 'Consulta General' })
  const [enviado, setEnviado] = useState(false)

  const servicios = [
    { id: 1, nombre: 'Consulta General', icon: '🩺' },
    { id: 2, nombre: 'Vacunación', icon: '💉' },
    { id: 3, nombre: 'Estética Canina', icon: '✂️' },
    { id: 4, nombre: 'Cirugía', icon: '🏥' }
  ]

  const handleBooking = (e) => {
    e.preventDefault()
    setEnviado(true)
    setTimeout(() => setEnviado(false), 4000)
  }

  return (
    <div className="vet-page">
      <div className="container">
        <nav className="vet-nav">
          <Link to="/" className="btn-back">← Volver al Portafolio</Link>
          <div className="vet-logo">🐾 VetCare Central</div>
        </nav>

        {/* Hero Section */}
        <header className="vet-hero">
          <h1>Cuidamos a quien más amas</h1>
          <p>Servicios veterinarios integrales con tecnología de punta en Aguascalientes.</p>
          <a href="#agendar" className="btn-vet">Agendar Cita</a>
        </header>

        {/* Servicios */}
        <section className="vet-services">
          <h2>Nuestros Servicios</h2>
          <div className="services-grid">
            {servicios.map(s => (
              <div key={s.id} className="service-card">
                <span className="s-icon">{s.icon}</span>
                <h3>{s.nombre}</h3>
                <p>Atención profesional garantizada para tu mascota.</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sistema de Citas */}
        <div className="vet-flex-row" id="agendar">
          <section className="vet-form-container">
            <h3>📅 Agendar Cita en Línea</h3>
            <form onSubmit={handleBooking}>
              <input type="text" placeholder="Nombre de la mascota" required 
                onChange={e => setCita({...cita, mascota: e.target.value})} />
              <input type="date" required 
                onChange={e => setCita({...cita, fecha: e.target.value})} />
              <select onChange={e => setCita({...cita, servicio: e.target.value})}>
                {servicios.map(s => <option key={s.id} value={s.nombre}>{s.nombre}</option>)}
              </select>
              <button type="submit" className="btn-submit-vet">Confirmar Cita</button>
              {enviado && <p className="success-txt">✅ Cita registrada para {cita.mascota} el {cita.fecha}</p>}
            </form>
          </section>

          {/* Ubicación y Contacto */}
          <section className="vet-info-card">
            <h3>📍 Ubicación y Contacto</h3>
            <p><strong>Dirección:</strong> Av. Universidad, Aguascalientes, Ags.</p>
            <p><strong>Teléfono:</strong> 449-363-9260</p>
            <p><strong>Horarios:</strong> Lun - Sáb: 9:00 AM - 8:00 PM</p>
            <div className="mock-map">
              <p>[ Mapa Interactivo Simulado ]</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Veterinaria