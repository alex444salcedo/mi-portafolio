import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Purificadora from './pages/projects/Purificadora'
import PracticasUTA from './pages/projects/PracticasUTA'
import POSMaindsoft from './pages/projects/POSMaindsoft'
import PlantCare from './pages/projects/PlantCare'
import Papeleria from './pages/projects/Papeleria'
import Finanzas from './pages/projects/Finanzas'
import Veterinaria from './pages/projects/Veterinaria'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Header />
      <main style={{ minHeight: '70vh' }}>
         <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/proyecto/purificadora" element={<Purificadora />} />
         <Route path="/proyecto/practicas-uta" element={<PracticasUTA />} />
         <Route path="/proyecto/pos-maindsoft" element={<POSMaindsoft />} />
         <Route path="/proyecto/plant-care" element={<PlantCare />} />
         <Route path="/proyecto/papeleria" element={<Papeleria />} />
         <Route path="/proyecto/finanzas" element={<Finanzas />} />
         <Route path="/proyecto/veterinaria" element={<Veterinaria />} />
        </Routes>
      </main>
      <Footer />
    </Router >
  )
}

export default App