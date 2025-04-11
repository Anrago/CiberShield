import { useState } from 'react'
import Home from './Views/home'
import './App.css'
import PruebaConexion from './Views/prueba'
function App() {
  const [count, setCount] = useState(0)

  return (
   <Home/>
  )
}

export default App
