import { useEffect } from "react"
import {useForm} from "react-hook-form"
import { createTask, deleteTask, getTask, undateTask } from "../api/tasks.api"
import { useNavigate, useParams } from "react-router-dom"
import {Form, Button, Stack} from 'react-bootstrap'

export function TaskFormPage() {
    const {
        register, 
        handleSubmit, 
        formState: {errors},
        setValue,
    } = useForm()

    const navigate = useNavigate()
    const params = useParams()

    const onSubmit = handleSubmit(async data => {
        if (params.id){
            await undateTask(params.id, data)
        } else {
            await createTask(data)
        }
        navigate('/tasks')
    })

    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                const {
                    data: {title, description},
                } = await getTask(params.id)
                setValue('title', title)
                setValue('description', description)
            }
        }
        loadTask()
    }, [])

    return (
        <div style={{maxWidth: '400px', paddingTop: '7rem'}} className="container mx-auto pb-5">
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="h2">Task Title</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="New Task..."
                        {...register("title", {required: true})}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="h4">Task Description</Form.Label>
                    <Form.Control as="textarea" 
                        rows={3}
                        placeholder="Add Task..."
                        {...register("description", {required: true})}
                    />
                </Form.Group>
                {errors.description && <span>this field is required</span>}
                
                <Stack direction="horizontal" gap={3}>
                {params.id && (
                    <Button style={{width: '100px'}} variant="danger" onClick={async () => {
                        const accepted = window.confirm("are your sure")
                        if(accepted){
                            await deleteTask(params.id)
                            navigate('/tasks')
                        }
                    }}>delete</Button>
                )}
                
                <Button className="ms-auto" type="submit" style={{width: '100px'}} variant="outline-primary">Save</Button>
                </Stack>
            </Form>
            
            {/* <form onSubmit={onSubmit}>
                <input 
                    type="text"
                    placeholder="title"
                    {...register("title", {required: true})}
                />
                {errors.title && <span>this field is required</span>}

                <textarea 
                    rows={3}
                    placeholder="description"
                    {...register("description", {required: true})}
                ></textarea>
                {errors.description && <span>this field is required</span>}
                
                <button>Save</button>
            </form> */}
        </div>
    )
}
