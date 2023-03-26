import React from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-tilt'
import s from './main.module.scss';



const Main = () => {
    return (
        <div id='Main'>



            <div className='w-full h-screen flex justify-center items-center'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800 '> Marco Wells</h1>
                    <Tilt className="Tilt" options={{ max: 25, scale: 0.1 }}>
                        <div className={s.img}>
                            <div className={s.absImg}></div>
                        </div>
                    </Tilt>
                    <h2 className='flex sm:text-3x text-2xl pt-4 text-gray-800'>I'm a
                        <TypeAnimation
                            sequence={[
                                'Mechatronics Engineer Graduate', // Types 'One'
                                2000, // Waits 1s
                                'Coder', // Deletes 'One' and types 'Two'
                                2000, // Waits 2s
                                'Web 3 Enthusiast',
                                2000,
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: '1em', paddingLeft: '5px' }}
                        />
                    </h2>
                    <div className='flex justify-between pt-6 max-w-[50px] w-full'>
                        <FaLinkedinIn className='cursor-pointer' size={20} />
                        <FaGithub className='cursor-pointer' size={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
