import { ListGroup } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export function TaskCard({task}) {
    const navigate = useNavigate()

    return (
        <ListGroup.Item action variant="light"
            className="position-relative"
            onClick={() => {
                navigate(`/tasks/${task.id}`)
            }}
        >
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <i className='bx bxs-edit position-absolute top-0 end-0'></i>
        </ListGroup.Item>
    )
}
