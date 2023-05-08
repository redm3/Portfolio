import React from 'react'
import ProjectItems from './ProjectItems'
import metro from '../../assets/metro.jpg'
import Buckleys from '../../assets/Buckleys.jpg'
import btrfly from '../../assets/BTRFLY.jpg'


const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p>
        4 Years experience in the Engineering sector, with an in-depth and comprehensive knowledge of Mechanical Engineering in electromagnets and Aluminium.Bachelor of Engineering Hons Graduate and currently graduated an AUT industry accredited certificate in Software engineering, which has an emphasis on practical skills training and projects to design and implement software solutions. Looking to build my career in Software Engineering, I am eager to land a junior role, eventually landing a developer role. Some of the key workplace skills I can bring to an organisation include attention to detail, problem-solving and Team Work.

        <ol>Contact me via email: marco.m.wells@gmail.com</ol>
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItems img={metro} title='IOD Capstone' technology='MongoDB, Express, React, Node' projectLink='https://github.com/redm3/Capstone'/>
            <ProjectItems img={Buckleys} title='Mechatronics Capstone' technology='Nvidia-jetson' projectLink='https://github.com/redm3/228798-Individual-Research-Project-'/>
            <ProjectItems img={btrfly} title='Web 3 Project' technology='Solidity' projectLink='https://github.com/redm3/BBC'/>
        </div>

    </div>
  )
}

export default Projects
