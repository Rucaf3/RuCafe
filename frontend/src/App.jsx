import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Sandwiches from './components/MenuOptions/Sandwiches/Sandwiches'
import Licuados from './components/MenuOptions/Licuados/Licuados'
import DesayunosMeriendas from './components/MenuOptions/DesayunosMeriendas/DesayunosMeriendas'
import Bebidas from './components/MenuOptions/Bebidas/Bebidas'
import AlmuerzosCenas from './components/MenuOptions/AlmuerzosCenas/AlmuerzosCenas'
import CafeteriaPanaderia from './components/MenuOptions/CafeteriaPanaderia/CafeteriaPanaderia'
import HamburguesaSandwiches from './components/MenuOptions/AlmuerzosCenas/MenuAlmuerzosCenas/HamburguesaSandwiches/HamburguesaSandwiches'
import Pizzas from './components/MenuOptions/AlmuerzosCenas/MenuAlmuerzosCenas/Pizzas/Pizzas'
import ParaPicar from './components/MenuOptions/AlmuerzosCenas/MenuAlmuerzosCenas/ParaPicar/ParaPicar'
import MilanesasAlPlato from './components/MenuOptions/AlmuerzosCenas/MenuAlmuerzosCenas/MilanesasAlPlato/MilanesasAlPlato'


export default function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          {/* Enrutamientos Home */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sandwiches" element={<Sandwiches />} />
          <Route exact path="/licuados" element={<Licuados />} />
          <Route exact path="/desayunos-meriendas" element={<DesayunosMeriendas />} />
          <Route exact path="/bebidas" element={<Bebidas />} />
          <Route exact path="/almuerzos-cenas" element={<AlmuerzosCenas />} />
          <Route exact path="/cafeteria-panaderia" element={<CafeteriaPanaderia />} />
          {/* Enrutamientos AlmuerzosCenas */}
          <Route exact path="/para-picar" element={<ParaPicar />} />
          <Route exact path="/pizzas" element={<Pizzas />} />
          <Route exact path="/al-plato" element={<MilanesasAlPlato />} />
          <Route exact path="/hamburguesas-y-sandwiches" element={<HamburguesaSandwiches />} />
        </Routes>
      </div>
    </Router>
  )
}
