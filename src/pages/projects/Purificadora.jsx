import { useState } from 'react'
import { Link } from 'react-router-dom'

// Movemos los datos fuera del componente para que el código sea más limpio
const PRODUCTOS_DATA = [
  {
    id: 1,
    nombre: "Agua Purificada 20L",
    precio: 25,
    descripcion: "Garrafón de 20 litros de agua purificada con altos estándares de calidad."
  },
  {
    id: 2,
    nombre: "Agua Purificada 5L",
    precio: 15,
    descripcion: "Botellón de 5 litros ideal para el hogar o la oficina."
  },
  {
    id: 3,
    nombre: "Servicio a Domicilio",
    precio: 30,
    descripcion: "Entrega programada de garrafones directamente en tu puerta."
  }
]

function Purificadora() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  })
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulación de envío de datos
    console.log('Datos enviados:', formData)
    setShowSuccess(true)
    
    setTimeout(() => {
      setShowSuccess(false)
      setFormData({ nombre: '', email: '', telefono: '', mensaje: '' })
    }, 3000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="proyecto-detalle">
      <div className="container">
        {/* Navegación de regreso */}
        <nav style={{ padding: '2rem 0' }}>
          <Link to="/" className="btn-back" style={{ textDecoration: 'none', color: 'var(--color-primary)', fontWeight: 'bold' }}>
            ← Volver al Portafolio
          </Link>
        </nav>

        <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💧 Purificadora de Agua</h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', color: '#666' }}>
            Desarrollo de una plataforma informativa con catálogo dinámico y sistema de contacto 
            para la gestión de pedidos locales.
          </p>
        </header>

        {/* Catálogo de Productos */}
        <section style={{ marginBottom: '5rem' }}>
          <h2 style={{ marginBottom: '2rem', borderBottom: '2px solid #eee', paddingBottom: '0.5rem' }}>
            Catálogo de Productos
          </h2>
          <div className="productos-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {PRODUCTOS_DATA.map(producto => (
              <div key={producto.id} className="producto-card" style={{ padding: '1.5rem', border: '1px solid #ddd', borderRadius: '12px', transition: 'transform 0.3s' }}>
                <h3 style={{ marginTop: 0 }}>{producto.nombre}</h3>
                <p className="precio" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#007bff' }}>
                  ${producto.precio} <span style={{ fontSize: '0.9rem', color: '#888' }}>MXN</span>
                </p>
                <p style={{ color: '#555', minHeight: '60px' }}>{producto.descripcion}</p>
                <button 
                  className="btn" 
                  style={{ width: '100%' }}
                  onClick={() => alert(`Has seleccionado: ${producto.nombre}. (Funcionalidad de carrito en desarrollo)`)}
                >
                  Agregar al pedido
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Formulario de Contacto */}
        <section style={{ maxWidth: '600px', margin: '0 auto', paddingBottom: '5rem' }}>
          <div style={{ backgroundColor: '#f9f9f9', padding: '2.5rem', borderRadius: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Solicitar Pedido</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group" style={{ marginBottom: '1.2rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Nombre completo</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Ej. Alejandro Salcedo"
                  style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ccc' }}
                />
              </div>
              
              <div className="form-group" style={{ marginBottom: '1.2rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Correo electrónico</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@correo.com"
                  style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ccc' }}
                />
              </div>
              
              <div className="form-group" style={{ marginBottom: '1.2rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Teléfono de contacto</label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  placeholder="449 000 0000"
                  style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ccc' }}
                />
              </div>
              
              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Detalles del pedido</label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="¿Cuántos garrafones necesitas?"
                  style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ccc', resize: 'vertical' }}
                ></textarea>
              </div>
              
              <button type="submit" className="btn" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}>
                Confirmar Solicitud
              </button>
              
              {showSuccess && (
                <div className="success-message" style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#d4edda', color: '#155724', borderRadius: '8px', textAlign: 'center', border: '1px solid #c3e6cb' }}>
                  ✅ ¡Solicitud enviada! Nos comunicaremos contigo en breve.
                </div>
              )}
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Purificadora