import { useState } from "react";

function Formulario({nuevaTarea}){

    let [textoTemporal,setTextoTemporal] = useState("")
    

    return <form onSubmit={ evento => {
                            evento.preventDefault()
                            if(textoTemporal.trim() != ""){
                                fetch("http://localhost:3000/nueva",{
                                    method : "POST",
                                    body : JSON.stringify({tarea : textoTemporal}),
                                    headers : {
                                        "Content-type" : "application/json"
                                        }
                                })
                                .then(respuesta => respuesta.text())
                                .then(({error,id}) => {
                                    if(!error){
                                         nuevaTarea({id, tarea : textoTemporal, terminada : true})
                                         return setTextoTemporal("")
                                    }
                                    console.log("error al usuario")
                                })
                           

                            }

                            
                            
            }}>
                <input type="text" placeholder="¿Qué hay que hacer?" value={textoTemporal} onChange={ evento => setTextoTemporal(evento.target.value)}/>
                <input type="submit" value="Crear tarea" />
           </form>

}

export default Formulario