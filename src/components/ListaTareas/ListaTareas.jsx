import Tarea from "../Tarea/Tarea.jsx";

function ListaTareas({ tasks, removeTask }){
    return (
        <ul className="task-list">
            {tasks.length === 0 ? (
                <p className="empty-message">No hay tareas pendientes</p>
            ) : (
                tasks.map(task => (
                    <Tarea
                        key={task.id}
                        taskNumber={task.taskNumber}
                        descripcion={task.descripcion}
                        onDelete={() => removeTask(task.id)} 
                    />
                ))
            )}
        </ul>
    );
}

export default ListaTareas;