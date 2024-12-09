import CheckboxInput from "../CheckboxInput/CheckboxInput.jsx";
import DescripcionTarea from "../DescripcionTarea/DescripcionTarea.jsx";
import Boton from "../Boton/Boton.jsx"
import { IoTrashOutline } from "react-icons/io5";
import { CiShare2 } from "react-icons/ci";
import { MdContentPaste } from "react-icons/md";




function Tarea({ taskNumber, descripcion, onDelete }) {
    return (
            <li className="task-item">
                <CheckboxInput taskNumber={taskNumber} />
                <DescripcionTarea taskNumber={taskNumber} descripcion={descripcion} />
                <Boton clase="btn-icono boton delete-button" icono={<MdContentPaste />} />
                <Boton clase="btn-icono boton delete-button" icono={<CiShare2 />} />
                <Boton clase="btn-icono boton delete-button" icono={<IoTrashOutline />} onClick={onDelete} />
            </li>
    );
} 

export default Tarea;