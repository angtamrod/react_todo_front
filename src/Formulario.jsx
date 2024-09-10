import { useState } from "react";

function Formulario(){
    return <form>
                <input type="text" placeholder="¿Qué hay que hacer?" />
                <input type="submit" value="Crear tarea" />
           </form>

}

export default Formulario