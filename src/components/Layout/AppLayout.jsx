import Navbar from '../Navbar'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'
import Home from '../../pages/Home'

const AppLayout = () => {
  return (
    <>
        <Navbar />
        
        <Outlet/>
        <Footer />
    </>
  )
}

export default AppLayout