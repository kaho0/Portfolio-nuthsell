import { Outlet } from 'react-router-dom'
import AboutSection from '../components/AboutSection'
import ProjectsSection from '../components/ProjectSection'
import EmailSection from '../components/EmailSection'
import Footer from "../components/Footer"
import Skills from '../components/SkillsSection/Skills'
import SkillsSection from '../components/SkillsSection/Newskills'
import MyPortfolio from '../components/Projects/projectsnew'
import ZoomIn from '../Animation/ZoomIn'
import ViewAllProjectsButton from '../components/Projects/projectsbtn'
const Main = () => {
  return (
    <div className='px-16  '>
      {/* <Navbar></Navbar> */}
      <div className='pt-5 pb-5 mb-10'>
        <Outlet />
      </div>
      <ZoomIn><AboutSection></AboutSection></ZoomIn>
      {/* <SkillsSection></SkillsSection> */}
      {/* <Skills></Skills> */}
      <MyPortfolio></MyPortfolio>
      <ViewAllProjectsButton></ViewAllProjectsButton>
      {/* <ProjectsSection></ProjectsSection> */}
      <SkillsSection></SkillsSection>

      <EmailSection></EmailSection>
      <Footer></Footer>
    </div>
  )
}

export default Main
