import EntradaTexto from "../EntradaTexto/EntradaTexto.jsx"
import Boton from "../Boton/Boton.jsx";
import { useState } from "react";
import { IoCheckmark } from "react-icons/io5";


function BotonYEntradaTexto({ addTask }){

    const [inputValue, setInputValue] = useState("");

    const handleAdd = () => {
        if (inputValue.trim()) {
            addTask(inputValue);
            setInputValue("");
        }
    };

    return (
        <div className="todo-input">
            <EntradaTexto
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            
            <Boton clase="btn-icono boton add-button" icono={<IoCheckmark />} onClick={handleAdd} />
        </div>
    );
}

export default BotonYEntradaTexto;

