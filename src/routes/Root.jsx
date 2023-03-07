import { Outlet } from 'react-router-dom'

import Sidebar from '../components/Sidebar'
import Home from '../pages/Home'
import Personal from '../pages/Personal'

function Root() {
  return (
    <>
      <h2>Ball Park Punks</h2>
      <Sidebar />
      <Outlet />
    </>
  )
}

export const routes = [{
  path : '/',
  element : <Root />,
  children : [
    {
      path : '/',
      element : <Home />
    },
    {
      path : '/personal',
      element : <Personal />
    }
  ]
}]