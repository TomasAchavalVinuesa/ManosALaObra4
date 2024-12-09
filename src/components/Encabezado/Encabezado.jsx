import BotonYEntradaTexto from "../BotonYEntradaTexto/BotonYEntradaTexto.jsx";
import Titulo from "../Titulo/Titulo.jsx";


function Encabezado({ addTask }){
    return(
        <div>
            <Titulo titulo="Lista de Tareas"/>
            <BotonYEntradaTexto addTask={addTask}/>
        </div>
    );
}

export default Encabezado;
