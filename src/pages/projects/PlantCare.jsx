import { useState } from 'react'
import { Link } from 'react-router-dom'
import './PlantCare.css'

function PlantCare() {
  // Mock Data basada en tus archivos
  const [misPlantas] = useState([
    { id: 1, nombre: 'Monstera Deliciosa', tipo: 'Interior', salud: 'Excelente', imagen: '🌿' },
    { id: 2, nombre: 'Suculenta', tipo: 'Exterior', salud: 'Necesita agua', imagen: '🌵' }
  ])

  const [recordatorios] = useState([
    { id: 1, tarea: 'Regar Monstera', fecha: 'Hoy - 6:00 PM', completada: false },
    { id: 2, tarea: 'Fertilizar Cactus', fecha: 'Mañana', completada: false }
  ])

  const [comunidad] = useState([
    { id: 1, usuario: 'PlantLover99', post: '¿Alguien sabe por qué las hojas de mi cuna de moisés se ponen amarillas? 🍂', likes: 12 },
    { id: 2, usuario: 'BioGarden', post: '¡Miren el crecimiento de mi helecho este mes! ✨', likes: 45 }
  ])

  return (
    <div className="plant-app">
      <div className="container">
        <nav className="plant-nav">
          <Link to="/" className="btn-back">← Regresar</Link>
          <div className="app-logo">🌿 PlantCare App</div>
        </nav>

        <div className="plant-grid">
          {/* Columna Izquierda: Mis Plantas y Recordatorios */}
          <aside className="plant-sidebar">
            <section className="section-card">
              <h3>Mis Plantas (`plants.js`)</h3>
              <div className="plants-list">
                {misPlantas.map(p => (
                  <div key={p.id} className="plant-item">
                    <span className="plant-icon">{p.imagen}</span>
                    <div className="plant-info">
                      <strong>{p.nombre}</strong>
                      <p>{p.tipo} • {p.salud}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="section-card">
              <h3>Recordatorios (`reminders.js`)</h3>
              <ul className="reminders-list">
                {recordatorios.map(r => (
                  <li key={r.id}>
                    <input type="checkbox" readOnly checked={r.completada} />
                    <span>{r.tarea} <small>{r.fecha}</small></span>
                  </li>
                ))}
              </ul>
            </section>
          </aside>

          {/* Columna Derecha: Comunidad */}
          <main className="plant-main">
            <section className="section-card">
              <h3>Comunidad (`community.js`)</h3>
              <div className="feed">
                {comunidad.map(post => (
                  <div key={post.id} className="post-card">
                    <strong>@{post.usuario}</strong>
                    <p>{post.post}</p>
                    <div className="post-actions">
                      <span>❤️ {post.likes}</span>
                      <span>💬 Comentar</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}

export default PlantCare