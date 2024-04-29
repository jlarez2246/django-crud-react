import { useEffect, useState } from "react"
import { getAllTasks } from "../api/tasks.api"
import { TaskCard } from "./TaskCard"
import { ListGroup } from "react-bootstrap"


export default function TasksList() {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        async function loadTasks() {
            const res = await getAllTasks()
            setTasks(res.data)
        }
        loadTasks()
    }, [])

    return (
        <div style={{paddingTop: '7rem'}} className="container pb-5">
            <ListGroup>{
                tasks.map(task => (
                    <TaskCard key={task.id} task={task} />
                ))
            }</ListGroup>
        </div>
    )
}
