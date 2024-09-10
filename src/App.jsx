import { useState } from 'react'
import Formulario from './Formulario'
import Tarea from './Tarea'

function App() {
  

  return (
    <>
      <Formulario />
      <section className="tareas">
         <Tarea /> 
      </section>
    </>
  )
}

export default App
