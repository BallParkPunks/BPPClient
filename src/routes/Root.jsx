import { Outlet } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Home from '../pages/Home'
import Personal from '../pages/Personal'

import '../assets/styles/App.css'

function Root() {
  return (
    <>
      <ChakraProvider>
        <h2>Ball Park Punks</h2>
        <Header />
        <Sidebar />
        <Outlet />
      </ChakraProvider>
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