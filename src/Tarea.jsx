import { useState } from "react"

function Tarea(){

    let [editando,setEditando] = useState(false)

    return (
            <div className="tarea">
                <h3 className={!editando ? "visible" : ""}>Aprender React</h3> 
                <input type="text" value="aprender React" /> 
                <button className="boton">editar</button> 
                <button className={!editando ? "guardar" : "editar"}>borrar</button>
                <button className="estado"><span></span></button> 
            </div>
            )

}

export default Tarea