import React from 'react'
import { Link } from 'react-router-dom'
import {Stack, Button} from 'react-bootstrap';

export function Navigation() {
    return (
        <div className='bg-dark fixed-top'>
            <Stack className='container bg-dark' direction="horizontal" gap={3}>
                <Link className="p-2 text-light" to={'/tasks'}>
                    <h1>Task app</h1>
                </Link>
                
                <Button style={{width: '100px'}} className="p-2 ms-auto" variant="primary">
                    <Link 
                        to={'/tasks-create'}
                        className='text-light text-decoration-none'
                    >
                        create task
                    </Link>
                </Button>
            </Stack>
  

        </div>
    )
}
