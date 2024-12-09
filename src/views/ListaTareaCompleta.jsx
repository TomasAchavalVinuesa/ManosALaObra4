import { useState } from 'react';
import ListaTareas from "../components/ListaTareas/ListaTareas.jsx"
import Encabezado from "../components/Encabezado/Encabezado.jsx"
import Divider from '../components/Divider/Divider.jsx';


function ListaTareaCompleta(){
    const [tasks, setTasks] = useState([
    ]);

    const addTask = (descripcion) => {
        const newTask = {
            id: tasks.length + 1,
            taskNumber: `task${tasks.length + 1}`,
            descripcion
        };
        setTasks([newTask, ...tasks]); 
    };

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return(
        <div className="todo-container">
            <Encabezado addTask={addTask}/>
            <Divider/>
            <ListaTareas tasks={tasks} removeTask={removeTask}/>
        </div>
    );
}

export default ListaTareaCompleta;