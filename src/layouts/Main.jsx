import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import AboutSection from '../components/AboutSection'
import ProjectsSection from '../components/ProjectSection'
const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='pt-24 min-h-[calc(100vh-68px)]'>
        <Outlet />
      </div>
     <AboutSection></AboutSection>
<ProjectsSection></ProjectsSection>
    </div>
  )
}

export default Main
