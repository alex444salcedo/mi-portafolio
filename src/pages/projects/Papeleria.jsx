import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Papeleria.css'

const PRODUCTOS_PAPE = [
  { id: 1, nombre: "Cuaderno Profesional", precio: 45, stock: 20, categoria: "Escolar" },
  { id: 2, nombre: "Caja de Colores 24pz", precio: 120, stock: 5, categoria: "Arte" },
  { id: 3, nombre: "Pluma Tinta Gel", precio: 18, stock: 50, categoria: "Escritura" },
]

function Papeleria() {
  const [carrito, setCarrito] = useState([])
  const [copias, setCopias] = useState({ cantidad: 0, tipo: 'BN' })

  // Lógica de Ventas
  const agregarAlCarrito = (prod) => {
    setCarrito([...carrito, prod])
  }

  const totalVenta = carrito.reduce((acc, item) => acc + item.precio, 0) + 
                     (copias.cantidad * (copias.tipo === 'BN' ? 1 : 5))

  return (
    <div className="pape-system">
      <div className="container">
        <nav className="pape-nav">
          <Link to="/" className="btn-back">← Menú Principal</Link>
          <div className="status-badge">🟢 Terminal Activa</div>
        </nav>

        <header className="pape-header">
          <h1>📑 Sistema "La Escolar"</h1>
          <p>Control de inventarios y servicios de impresión/copiado.</p>
        </header>

        <div className="pape-grid">
          {/* Inventario */}
          <section className="pape-card">
            <h3>📦 Inventario Disponible</h3>
            <div className="pape-list">
              {PRODUCTOS_PAPE.map(p => (
                <div key={p.id} className="pape-item">
                  <div>
                    <strong>{p.nombre}</strong>
                    <p>${p.precio} MXN - Stock: {p.stock}</p>
                  </div>
                  <button onClick={() => agregarAlCarrito(p)} className="btn-add-pape">
                    +
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Servicios de Copiado */}
          <section className="pape-card highlight">
            <h3>🖨️ Centro de Copiado</h3>
            <div className="copias-form">
              <label>Cantidad de copias:</label>
              <input 
                type="number" 
                value={copias.cantidad} 
                onChange={(e) => setCopias({...copias, cantidad: parseInt(e.target.value) || 0})}
              />
              <div className="tipo-copia">
                <button onClick={() => setCopias({...copias, tipo: 'BN'})} className={copias.tipo === 'BN' ? 'active' : ''}>B/N ($1)</button>
                <button onClick={() => setCopias({...copias, tipo: 'Color'})} className={copias.tipo === 'Color' ? 'active' : ''}>Color ($5)</button>
              </div>
            </div>
          </section>

          {/* Resumen de Venta (Ticket) */}
          <section className="pape-card ticket">
            <h3>🛒 Resumen de Venta</h3>
            <div className="ticket-body">
              {carrito.map((item, index) => (
                <div key={index} className="ticket-item">
                  <span>{item.nombre}</span>
                  <span>${item.precio}</span>
                </div>
              ))}
              {copias.cantidad > 0 && (
                <div className="ticket-item">
                  <span>{copias.cantidad} Copias ({copias.tipo})</span>
                  <span>${copias.cantidad * (copias.tipo === 'BN' ? 1 : 5)}</span>
                </div>
              )}
              <hr />
              <div className="ticket-total">
                <strong>TOTAL:</strong>
                <strong>${totalVenta} MXN</strong>
              </div>
              <button className="btn-checkout" onClick={() => alert('Venta Procesada')}>
                Finalizar Venta
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Papeleria