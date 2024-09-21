import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import HigligthText from '../components/core/HomePage/HigligthText';
import Bttn from '../components/core/HomePage/Bttn'
import banner from '../assets/vedio/banner.mp4'
import CodeBolds from '../components/core/HomePage/CodeBolds';
import Timeline from '../components/core/HomePage/Timeline';
import Language from '../components/core/HomePage/Language';
import Become_inst from '../components/core/HomePage/Become_inst';
import Expoler from '../components/core/HomePage/Expoler';

function Home() {
    return (
        <>
            {/* Section1*/}
            <div className='w-screen min-h-screen flex flex-col bg-gray-900
    '>
            <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center justify-between   '>
                <Link to={"/signup"}>
                    <div className='mt-16 p-1 mx-auto rounded-full bg-gray-800 transition-all duration-200 hover:scale-95 group '>
                        <div className='text-white flex flex-row items-center gap-2 px-7 py-1 group-hover:bg-gray-700 rounded-full'>
                            <p>Become an Instructor</p>
                            <FaArrowRight />

                        </div>
                    </div>
                </Link>
                <div className='text-white mt-8 text-center text-4xl font-semibold'>
                    Empower Your Future with
                    <HigligthText text={'Coding Skill'} />

                </div>

                <div className='text-gray-500 text-center font-bold mt-4 text-1xl  '>
                    With our online coding courses.you can learn at your own pace , from anywhere in the world , and get access to a resours,which inclued hande-on-projects
                </div>

                <div className='flex flex-row gap-7 mt-8'>
                    <Bttn childern={"Leran More"} active={true} linkto={"./sign"}></Bttn>

                    <Bttn childern={"Book a Demo"} active={false} linkto={"./sign"}></Bttn>


                </div>

                    <div className=' mx-4 my-12 max-w-[70%] shadow-[10px_-5px_50px_-5px] shadow-blue-200'>
                        <video
                            className='shadow-[12px_12px_0px_0px] shadow-white'
                        muted
                        loop
                        autoPlay

                    >
                        <source src={banner} />
                    </video>
                </div>


                <div>
                    <CodeBolds
                        postion={"lg:flex-row"}
                        heading={
                            <div className='text-4xl font-semibold'>
                                Unlock Your
                                <HigligthText text={"coding Potential"} />
                                with our online coureses
                            </div>
                        }

                        subheading={
                            'This code snippet is a combination of Tailwind CSS utility classes that apply a transition effect to an element when it is hovered overHeres what each part does:'
                        }

                        btt1={
                            {
                                text: "Try it YourSelf",
                                linkto: "/signup",
                                active: true,
                            }
                        }

                        btt2={
                            {
                                text: "Learn More",
                                linkto: "/login",
                                active: false,
                            }
                        }
                        codeblock={
                            `< !DOCTYPE html>
                        <html lang="en">
                            <head>
                                <meta charset="UTF-8">
                                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                        <title>Welcome Page</title>
                                    </head>
                                    <body>
                                        <h1>Welcome to coding world</h1>
                                    </body>
                                </html>`
                        }
                        codecolo={"text-yellow-400"}
                    />

                </div>

                <div>
                    <CodeBolds
                        postion={"lg:flex-row-reverse"}
                        heading={
                            <div className='text-4xl font-semibold'>
                                Unlock Your
                                <HigligthText text={"coding Potential"} />
                                with our online coureses
                            </div>
                        }

                        subheading={
                            'This code snippet is a combination of Tailwind CSS utility classes that apply a transition effect to an element when it is hovered overHeres what each part does:'
                        }

                        btt1={
                            {
                                text: "Try it YourSelf",
                                linkto: "/signup",
                                active: true,
                            }
                        }

                        btt2={
                            {
                                text: "Learn More",
                                linkto: "/login",
                                active: false,
                            }
                        }
                        codeblock={
                            `< !DOCTYPE html>
                        <html lang="en">
                            <head>
                                <meta charset="UTF-8">
                                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                        <title>Welcome Page</title>
                                    </head>
                                    <body>
                                        <h1>Welcome to coding world</h1>
                                    </body>
                                </html>`
                        }
                        codecolo={"text-yellow-400"}
                    />

                </div>

            </div>
                <Expoler />
            </div>


        

            {/* Section2*/}

            <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center justify-between mt-[300px] mb-[40px]'>
                <div className='flex flex-row gap-7 mt-8'>
                    <div className='flex flex-row gap-2'>
                   
                <Bttn childern={"Explore Full Catalong"} active={true} linkto={"./sign"}></Bttn>
                   {/* <FaArrowRight/> */}
                    </div>
                    <Bttn childern={"Learn More"} active={false} linkto={"./sign"}></Bttn>


                </div>


                <div className='flex flex-row mt-[150px] '>
                    <div className='w-[45%] ml-[40px]'>
                        <p className='text-4xl font-semibold'>
                            Get the skills you need for a 
                            <HigligthText text={"job that is in demand"}/>
                        </p>
                    </div>

                    <div className='w-[45%] mr-[30px] font-bold flex flex-col items-start gap-7 ml-[20px]'>
                        <p className='font-bold text-1xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, excepturi Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, esse.</p>
                        <Bttn childern={"Leran More"} active={true} linkto={"./sign"}></Bttn>
                    </div>

                </div>


                <Timeline />

                <Language />
                
                <Become_inst/>

                
                

            </div>
           

        </>
    )
}

export default Home
