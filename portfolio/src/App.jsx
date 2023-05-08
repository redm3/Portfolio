/* import { ParticlesBackground } from './components/ParticlesBackground/ParticlesBackground' */
import SideNav from './components/NavBar/sidenav'
import Main from './components/Main/Main'
import Work from './components/Work/Work'
import Projects from './components/Projects/projects'
import Contact from './components/Contact.jsx/Contact'


function App() {
  return (
    <div>
      {/* <ParticlesBackground /> */}
      <SideNav/>
      <Main/>
      <Work/>
      <Projects/>
      <Contact/>

    </div>

  )
}

export default App
