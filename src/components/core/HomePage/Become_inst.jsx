import React from 'react'
import inst from '../../../assets/img/inst.png'
import Bttn from './Bttn'
import HigligthText from './HigligthText'

function Become_inst() {
    return (
        <div className='bg-gray-900 w-screen min-h-screen mt-[120px]'>
        <div className=' flex flex-row w-11/12 items-center justify-between max-w-maxContent gap-8 '>

                <div className='w-[45%] items-center justify-between ml-[100px] mt-[200px] shadow-[12px_12px_0px_0px] shadow-white'>
                <img src={inst} alt=""
                className='items-center'/>
            </div>

            <div className='flex flex-col w-[45%] items-start gap-8 mt-[130px] ml-[70px]'>
                <div className='text-white text-4xl font-semibold'>
                    Become an <HigligthText text={'instrutor'}/>
                </div>
                <div className='text-base text-white font-medium'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, accusantium molestias at quos error optio!
                </div>

                <div className='mt-[30px]'>
                    <Bttn childern={"Start Teaching Now"} active={true} linkto={"./sign"}></Bttn>
                </div>
            </div>

            </div>
        </div>
    )
}

export default Become_inst
