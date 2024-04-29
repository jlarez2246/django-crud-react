import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { TasksPage } from './pages/TasksPage'
import { TaskFormPage } from './pages/TaskFormPage'
import { Navigation } from './components/Navigation'

function App() {
    return (
        <div style={{height: '100vh'}} className='bg-light-subtle'>
            <BrowserRouter>

                <Navigation />

                <Routes>
                    <Route path='/' element={<Navigate to='/tasks' />} />
                    <Route path='/tasks' element={<TasksPage />} />
                    <Route path='/tasks-create' element={<TaskFormPage />} />
                    <Route path='/tasks/:id' element={<TaskFormPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
