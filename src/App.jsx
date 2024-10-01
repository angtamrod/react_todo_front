import { useEffect, useState } from 'react'
import Formulario from './Formulario'
import Tarea from './Tarea'

function App() {
  
  let [tareas,setTareas] = useState([])
 //Hace un .map de tareas y de ahi saca de cada tarea con desestructuración ({id,tarea,terminada}) id, tarea(que es el texto) y si está terminada o no
 
 useEffect(() => {
    fetch("http://localhost:3000/tareas")
    .then(respuesta => respuesta.json())
    .then(tareas => {
      setTareas(tareas) 
    })
  }, []) 

  function nuevaTarea(tarea){
    setTareas([...tareas,tarea])
  }

  function borrarTarea(id){
    setTareas(tareas.filter( tarea => {
      return tarea.id != id
    }))
  }

  function actualizarEstado(id){
    setTareas(tareas.map( tarea => {
        if(tarea.id == id){
          tarea.terminada = !tarea.terminada
        }
        return tarea
    }))
  }
  function actualizarTexto(id,texto){
    setTareas(tareas.map(tarea => {
      if(tarea.id == id){
        tarea.tarea = texto
      }
      return tarea

    }))
  }

 
 return (
    <>
      <Formulario nuevaTarea={nuevaTarea}/>
      <section className="tareas">
         { tareas.map( ({id,tarea,terminada}) => <Tarea key={id} 
                                                        id={id} 
                                                        tarea={tarea} 
                                                        terminada={terminada} 
                                                        borrarTarea={borrarTarea} 
                                                        actualizarEstado={actualizarEstado} 
                                                        actualizarTexto={actualizarTexto} 
                                                  /> ) } 
      </section>
    </>
  )
}

export default App