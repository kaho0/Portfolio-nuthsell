import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import AboutSection from '../components/AboutSection'
import ProjectsSection from '../components/ProjectSection'
import EmailSection from '../components/EmailSection'
import Footer from "../components/Footer"
import Skills from '../components/SkillsSection/Skills'
const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='pt-24 min-h-[calc(100vh-68px)]'>
        <Outlet />
      </div>
     <AboutSection></AboutSection>
<Skills></Skills>

<ProjectsSection></ProjectsSection>
<EmailSection></EmailSection>
<Footer></Footer>
    </div>
  )
}

export default Main
