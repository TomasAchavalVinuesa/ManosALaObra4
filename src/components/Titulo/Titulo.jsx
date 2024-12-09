import Boton from "../Boton/Boton.jsx";
import { IoScanSharp } from "react-icons/io5";


function Titulo(props){
    return(
        <div className="header">
            <h1 className="title">{props.titulo}</h1> 
            <Boton clase="btn-icono boton delete-button" icono={<IoScanSharp />} />
        </div>
    ); 
}

export default Titulo;