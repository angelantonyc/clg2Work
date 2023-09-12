import { useState } from "react"
import Checkbox from "./checkbox/index";

function TodoListApp() {
    const [taskList, setTaskList] = useState([]);
    const [newTask, setNewTask] = useState(
        {
            id: 0,
            taskDesc: "",
            isCompleted: false
        }
    );
    const addTaskList = (event) => {
        event.preventDefault();
        setTaskList([...taskList, newTask]);
        console.log(taskList);
        setNewTask({
            id: 0,
            taskDesc: " ",
            isCompleted: false
        })
    }
    const handleCheckbox = (id) => {
        {
            const newTaskList = taskList.map((task) => {
                return (task.id === id) ? { ...task, isCompleted: true } : { ...task };

            });
            setTaskList(newTaskList);
        }
    }
    return (
        <div>
            <h2>ToDo List</h2>
            <form onSubmit={addTaskList}>
                <label>Enter the new Task</label>
                <input type="text" name="taskDescription" value={newTask.taskDesc} onChange={(event) => { setNewTask({ id: (taskList.length + 1), taskDesc: event.target.value, isCompleted: false }) }} />
                <button>Add Task</button>
            </form>
            {taskList.length > 0 ?
                (<>
                    {
                        taskList.map((task, index) => {
                            return (
                                <div id={task.id} key={task.id + index}>
                                    {task.isCompleted ?
                                        (<>
                                            <strike>{task.taskDesc}</strike>
                                        </>) :
                                        (<>
                                            <Checkbox checked={task.isCompleted}
                                                id={task.id}
                                                label={task.taskDesc}
                                                handleCheckbox={(e) => handleCheckbox(task.id)}
                                            />
                                        </>)
                                    }
                                </div>
                            );
                        })
                    }
                </>) :
                <p>No tasks for today</p>
            }
        </div>
    );
}
export default TodoListApp