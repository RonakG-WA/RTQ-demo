import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
const Users = React.lazy(() => import('../pages/users'));
const Dashboard = React.lazy(() => import('../pages/dashboard'));


const Router: React.FC = () => {
  return (
    <Suspense>
      <Routes>
        <Route path='/users' element={<Users></Users>}></Route>
        <Route path='/' element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </Suspense>
  )
}

export default Router
