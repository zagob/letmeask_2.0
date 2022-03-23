import { Route, Routes } from 'react-router-dom'
import { AdminRoom } from '../pages/AdminRoom'
import { Home } from '../pages/Home'
import { NewRoom } from '../pages/NewRoom'
import { Room } from '../pages/Room'


export function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/rooms/new' element={<NewRoom />} />
            <Route path='/room/:id' element={<Room />} />

            <Route path='/admin/room/:id' element={<AdminRoom />} />
        </Routes>
    )
}