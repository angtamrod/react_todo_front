import { useState } from "react"

function Tarea({id,tarea,terminada,borrarTarea,actualizarEstado,actualizarTexto}){

    let [editando,setEditando] = useState(false) //Esto configura una variable para indicar si estamos editando la tarea o no (por lo tanto devolverá true o false)
    let [texto,setTexto] = useState(tarea)
    
    
    return (<div className="tarea">
                <h3 className={!editando ? "visible" : ""}>{ tarea }</h3> 
                <input className={ editando ? "visible" : ""} type="text" value={texto} 
                      onChange={ evento => setTexto(evento.target.value)} /> 
                <button className="boton" 
                        onClick={ () => {
                                if(editando){
                                        if(texto.trim() != "" && texto.trim() != tarea){
                                                fetch("http://localhost:3000/tareas/actualizar/texto/" + id, {
                                                        method : "PUT",
                                                        body: JSON.stringify({id,texto}),
                                                        headers : {
                                                            "Content-type" : "application/json"
                                                        }
                                                })
                                                .then(respuesta => respuesta.json())
                                                .then(({error,resultado}) => {
                                                     if (!error && resultado == "ok") {
                                                         actualizarTexto(id, texto.trim())
                                                         setTexto(texto.trim())
                                                         return setEditando(false)
                                                    } 
                                                    console.log("...error a usuario")  
                                                 })      
                                        }setTexto(tarea)
                                         setEditando(false)
                                }else{
                                     setEditando(true)      
                                }


                                /* fetch("http://localhost:3000/tareas/actualizar/texto/" + id, {
                                        method : "PUT",
                                        body: JSON.stringify({id,texto}),
                                        headers : {
                                            "Content-type" : "application/json"
                                        }
                                })
                                .then(respuesta => respuesta.json())
                                .then(respuesta => {
                                     if (respuesta.resultado == "ok" && editando) {
                                         actualizarTexto(id, texto);
                                    }setEditando(!editando);    
                                 */
                        } }
                >{ editando ? "guardar" : "editar"}</button> 
                <button className="boton" 
                        onClick={() => {
                                fetch("http://localhost:3000/tareas/borrar/" + id, {
                                        method : "DELETE",
                                        
                                })
                                .then(respuesta => respuesta.json())
                                .then(({error, resultado}) => {
                                        if(!error && resultado == "ok"){
                                             return borrarTarea(id)   
                                        }
                                        console.log("...error al usuario")       
                                })
                        } }>borrar</button>
                <button className={ `estado ${terminada ? "terminada" : "" } ` } 
                        onClick={() => {
                                fetch("http://localhost:3000/tareas/actualizar/estado/" + id, {
                                        method : "PUT",
                                         
                                })
                                .then(respuesta => respuesta.json())
                                .then(({error, resultado}) => {
                                        if(!error && resultado == "ok"){
                                             return  actualizarEstado(id) 
                                        }
                                        console.log("...error al usuario")       
                                })
                        } }><span></span></button> 
            </div>)
}

export default Tarea

//setEditando(!editando)