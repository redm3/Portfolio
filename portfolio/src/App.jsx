/* import { ParticlesBackground } from './components/ParticlesBackground/ParticlesBackground' */
import SideNav from './components/NavBar/SideNav';
import Main from './components/Main/Main'
import Work from './components/Work/Work'
import Projects from './components/Projects/projects'
import Contact from './components/Contact.jsx/Contact'
import EarthCanvas from './components/Canvas/Earth'


function App() {
  return (
    <div>
      {/* <ParticlesBackground /> */}
      <SideNav/>
      <Main/>
      <Work/>
      <Projects/>
      
      <Contact/>
      <EarthCanvas/>
      
      

    </div>

  )
}

export default App
