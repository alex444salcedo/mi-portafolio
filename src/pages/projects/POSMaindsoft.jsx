import { Link } from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import './POSMaindsoft.css'

// Datos simulados de ventas semanales
const DATA_VENTAS = [
  { dia: 'Lun', ventas: 4000 },
  { dia: 'Mar', ventas: 3000 },
  { dia: 'Mie', ventas: 5000 },
  { dia: 'Jue', ventas: 2780 },
  { dia: 'Vie', ventas: 6890 },
  { dia: 'Sab', ventas: 8500 },
  { dia: 'Dom', ventas: 2100 },
]

const PRODUCTOS_STOCK = [
  { id: 101, nombre: "Teclado Mecánico", stock: 15, precio: 850 },
  { id: 102, nombre: "Mouse Gamer", stock: 4, precio: 450 },
  { id: 103, nombre: "Monitor 24'", stock: 8, precio: 3200 },
]

function POSMaindsoft() {
  return (
    <div className="pos-container">
      <div className="container">
        <nav className="pos-nav">
          <Link to="/" className="btn-back">← Salir al Portafolio</Link>
          <div className="brand-badge">Maindsoft POS System</div>
        </nav>

        <header className="pos-header">
          <h1>📊 Panel de Control de Ventas</h1>
          <p>Sistema integral de inventarios y reportes desarrollado durante mi estadía profesional.</p>
        </header>

        {/* Resumen de Métricas */}
        <div className="metrics-grid">
          <div className="metric-card">
            <span className="metric-label">Ventas del Día</span>
            <span className="metric-value">$12,450.00</span>
          </div>
          <div className="metric-card">
            <span className="metric-label">Productos en Stock</span>
            <span className="metric-value">124</span>
          </div>
          <div className="metric-card alert">
            <span className="metric-label">Stock Bajo</span>
            <span className="metric-value">3</span>
          </div>
        </div>

        {/* Gráfica de Ventas */}
        <div className="chart-section">
          <h3>Rendimiento Semanal</h3>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <BarChart data={DATA_VENTAS}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dia" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="ventas" fill="#007bff" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Inventario Rápido */}
        <div className="inventory-section">
          <h3>Inventario Crítico</h3>
          <table className="pos-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Producto</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {PRODUCTOS_STOCK.map(prod => (
                <tr key={prod.id}>
                  <td>#{prod.id}</td>
                  <td>{prod.nombre}</td>
                  <td>${prod.precio}</td>
                  <td>{prod.stock} pzas</td>
                  <td>
                    <span className={prod.stock < 5 ? 'tag-danger' : 'tag-success'}>
                      {prod.stock < 5 ? 'Reabastecer' : 'Disponible'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default POSMaindsoft