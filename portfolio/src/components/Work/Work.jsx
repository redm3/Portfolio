import React from 'react'
import WorkItem from './WorkItem'

const data = [
  {
    year: 2021,
    title: ' Altus Graduate Engineer',
    duration: '1 Year 11 Months',
    details: 'The Altus Engineering Programme provides a two-year overview of the many different skills and disciplines involved in a major aluminum manufacturing and fabrication company.Rotated positions and learned how the different stakeholders in the Aluminium industry operate with each other. Six different placements; Drawing office, Die Extrusion Team. Bradnams- Fabricator, Technical Design Team, Operations- Project Management, Industrial Trade Centre- Sales & Customer Service.'
  },
  {
    year: 2019,
    title: 'Mechanical Design Intern',
    duration: '2 Years 1 Month',
    details: 'Reviewed engineering documentation, including customers drawings, reviewing & updating BOM entries and using Solid Works to support the Design Managers work. Reviewed manufacturing processes used for manufacturing projects and documented steps requiring further explanation from Senior Engineers.(BOM, Geometric Dimensioning and tolerancing) Collaborated with the Coil Winding department to discuss processes and find ways to boost performance (toolings/jigs/fixtures). Designed custom Jigs on solid works with help of senior engineers. Designed and made a coil winding machine and a copper spool tensioning system to assist the manufacturing team and as an individual research project (Nvidia jetson, TCP communication, Machine Vision, jupyter, Linux, Python & C). Integrated electromechanical components such as displays, switches, cables, and connectors (soldering). Testing Department(QA) Reported repeat issues to supervisors and diagnosed the source. Sorted finished products into piles depending on quality statuses. Create Non-conformance reports on faulty parts. Worked closely with the assembly team and the machine shop for the duration of projects.'
  },
]

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e] mb-8'>Work</h1>
      {data.map((item, idx) => (
        <WorkItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details} />

      ))}
    </div>
  )
}

export default Work