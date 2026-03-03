import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import './Finanzas.css'

const DATA_RESUMEN = [
  { name: 'Ingresos', value: 15000, color: '#27ae60' },
  { name: 'Gastos', value: 8500, color: '#e74c3c' },
]

function Finanzas() {
  const [transacciones] = useState([
    { id: 1, tipo: 'ingreso', concepto: 'Sueldo Maindsoft', monto: 12000, fecha: '2026-02-15' },
    { id: 2, tipo: 'gasto', concepto: 'Renta', monto: 4500, fecha: '2026-02-02' },
    { id: 3, tipo: 'gasto', concepto: 'Internet', monto: 600, fecha: '2026-02-05' },
    { id: 4, tipo: 'ingreso', concepto: 'Freelance', monto: 3000, fecha: '2026-02-20' },
  ])

  const [metas] = useState([
    { id: 1, nombre: 'Nueva Laptop', objetivo: 25000, ahorrado: 15000 },
    { id: 2, nombre: 'Certificación AWS', objetivo: 3500, ahorrado: 3500 },
  ])

  const balanceTotal = transacciones.reduce((acc, t) => 
    t.tipo === 'ingreso' ? acc + t.monto : acc - t.monto, 0
  )

  return (
    <div className="finance-app">
      <div className="container">
        <nav className="finance-nav">
          <Link to="/" className="btn-back">← Volver</Link>
          <div className="user-profile">Hola, Alejandro 👋</div>
        </nav>

        <div className="finance-dashboard">
          {/* Tarjeta de Balance Global */}
          <section className="balance-card">
            <p>Balance Total</p>
            <h2>${balanceTotal.toLocaleString()} MXN</h2>
            <div className="balance-stats">
              <span className="inc">⬆ $15,000</span>
              <span className="exp">⬇ $8,500</span>
            </div>
          </section>

          {/* Gráfico y Transacciones */}
          <div className="finance-main-grid">
            <section className="finance-card chart-box">
              <h3>Distribución Mensual</h3>
              <div style={{ width: '100%', height: 200 }}>
                <ResponsiveContainer>
                  <PieChart>
                    <Pie data={DATA_RESUMEN} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                      {DATA_RESUMEN.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </section>

            <section className="finance-card">
              <h3>Últimos Movimientos</h3>
              <div className="transaction-list">
                {transacciones.map(t => (
                  <div key={t.id} className="t-item">
                    <div className="t-info">
                      <strong>{t.concepto}</strong>
                      <span>{t.fecha}</span>
                    </div>
                    <span className={`t-amount ${t.tipo}`}>
                      {t.tipo === 'ingreso' ? '+' : '-'}${t.monto}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Metas de Ahorro */}
          <section className="finance-card goals-section">
            <h3>Mis Metas de Ahorro</h3>
            <div className="goals-grid">
              {metas.map(m => (
                <div key={m.id} className="goal-item">
                  <div className="goal-header">
                    <span>{m.nombre}</span>
                    <span>{Math.round((m.ahorrado/m.objetivo)*100)}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${(m.ahorrado/m.objetivo)*100}%` }}></div>
                  </div>
                  <p>${m.ahorrado} de ${m.objetivo}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Finanzas