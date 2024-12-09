function EntradaTexto({ value, onChange }){
    return(
        <input type="text" placeholder="Escribe la tarea" className="task-input" value={value} onChange={onChange} />
    );
}

export default EntradaTexto;