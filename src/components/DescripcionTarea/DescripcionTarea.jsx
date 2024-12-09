function DescripcionTarea(props){
    return(
        <label htmlFor={props.taskNumber} className="task-label">{props.descripcion}</label>
    );
}

export default DescripcionTarea;