import './App.css'
import NavBar from './components/NavBar'
import Inicio from './components/Inicio'
import Tecnologias from './components/Tecnologias'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element= {<Inicio/>} />
        <Route path="/tecnologias" element= {<Tecnologias/>} />
      </Routes>
    </>
  )
}

export default App
