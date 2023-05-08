import React from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation';
import s from './main.module.scss';

const Main = () => {
    return (
        <div id='Main'>
            <div className='w-full h-screen flex justify-center items-center'>
                <div className={s.img}>
                    <div className={s.absImg}></div>
                </div>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800 '> Marco Wells</h1>

                    <h2 className='flex sm:text-3x text-2xl pt-4 text-gray-800'>I'm a
                        <TypeAnimation
                            sequence={[
                                'Mechatronics Engineer Graduate', // Types 'One'
                                2000, // Waits 1s
                                'IOD Bootcamp Graduate', // Deletes 'One' and types 'Two'
                                2000, // Waits 2s
                                'Web 3 Developer',
                                2000,
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: '1em', paddingLeft: '5px' }}
                        />
                    </h2>
                    <div className='flex justify-between pt-6 max-w-[50px] w-full'>
                        <a href='https://www.linkedin.com/in/marco-wells-a7a765133/' target='_blank' rel='noopener noreferrer'>
                            <FaLinkedinIn className='cursor-pointer' size={20} />
                        </a>
                        <a href='https://github.com/redm3' target='_blank' rel='noopener noreferrer'>
                            <FaGithub className='cursor-pointer' size={20} />
                        </a>
{/*                         <a href='https://www.file14studios.com/' target='_blank' rel='noopener noreferrer'>
                            <img src="./src/assets/File14.png" className='cursor-pointer' size={40} alt="File14 Studios logo" />
                        </a> */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
