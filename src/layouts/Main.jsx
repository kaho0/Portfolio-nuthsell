import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import AboutSection from '../components/AboutSection'
const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='pt-24 min-h-[calc(100vh-68px)]'>
        <Outlet />
      </div>
     <AboutSection></AboutSection>
    </div>
  )
}

export default Main
