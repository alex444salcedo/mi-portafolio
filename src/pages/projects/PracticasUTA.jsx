import { useState } from 'react'
import { Link } from 'react-router-dom'
import './PracticasUTA.css'

// Simulamos la base de datos que manejabas en SQL
const MOCK_PRACTICAS = [
  { id: 1, alumno: "Alejandro Salcedo", empresa: "Maindsoft", proyecto: "Punto de Venta", estado: "Finalizado", fecha: "2026-02-20" },
  { id: 2, alumno: "Laura Torres", empresa: "SoftTek", proyecto: "API de Inventarios", estado: "En Proceso", fecha: "2026-02-25" },
  { id: 3, alumno: "Roberto Gómez", empresa: "Nissan", proyecto: "Control de Logística", estado: "Pendiente", fecha: "2026-03-01" },
  { id: 4, alumno: "Jimena Ruíz", empresa: "UTA", proyecto: "Portal de Estadías", estado: "Asignado", fecha: "2026-01-15" }
]

function PracticasUTA() {
  const [busqueda, setBusqueda] = useState('')

  // Lógica de filtrado en tiempo real
  const datosFiltrados = MOCK_PRACTICAS.filter(item => 
    item.alumno.toLowerCase().includes(busqueda.toLowerCase()) ||
    item.empresa.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <div className="admin-page">
      <div className="container">
        <nav className="admin-nav">
          <Link to="/" className="btn-back">← Volver al Home</Link>
          <span className="badge-uta">Sistema UTA v2.0</span>
        </nav>

        <header className="admin-header">
          <h1>🎓 Gestión de Prácticas Profesionales</h1>
          <p>Módulo de administración para la asignación y seguimiento de estadías académicas.</p>
        </header>

        <div className="admin-card">
          <div className="table-controls">
            <div className="search-box">
              <span>🔍</span>
              <input 
                type="text" 
                placeholder="Buscar por alumno o empresa..." 
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
            </div>
            <button className="btn-add" onClick={() => alert('Función para agregar (simulada)')}>
              + Nueva Asignación
            </button>
          </div>

          <div className="table-responsive">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Alumno</th>
                  <th>Empresa</th>
                  <th>Proyecto</th>
                  <th>Fecha Inicio</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {datosFiltrados.map(reg => (
                  <tr key={reg.id}>
                    <td className="font-bold">{reg.alumno}</td>
                    <td>{reg.empresa}</td>
                    <td>{reg.proyecto}</td>
                    <td>{reg.fecha}</td>
                    <td>
                      <span className={`status-pill ${reg.estado.replace(/\s+/g, '-').toLowerCase()}`}>
                        {reg.estado}
                      </span>
                    </td>
                    <td>
                      <button className="btn-icon" title="Editar">✏️</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PracticasUTA