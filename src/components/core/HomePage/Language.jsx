import React from 'react'
import HigligthText from './HigligthText'
import Know_your_Progress from '../../../assets/img/Know_your_Progress.png'
import Compare_with_others from '../../../assets/img/Compare_with_others.png'
import Plan_your_lessons from '../../../assets/img/Plan_your_lessons.png'
import Bttn from './Bttn'

function Language() {
    return (
        <div className='flex flex-col w-11/12 items-center justify-between max-w-maxContent'>

            <div className='mt-[130px]  '>
                <p className='text-4xl font-semibold'>Your swiss knife for <HigligthText text={'learning any language'} /></p>
            </div>

            <div className='mt-[10px] w-[65%] items-center justify-center font-medium'>
                <p className='text-base items-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quas architecto distinctio dolorum et aut Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quia?
                    .</p>
            </div>


            <div className='flex flex-row  items-center justify-center mt-[110px] gap-2'>
                <img src={Know_your_Progress} alt="" className='object-contain  lg:-mr-32'/>
                <img src={Compare_with_others} alt="" className='object-contain lg:-mb-10 lg:-mt-0 -mt-12' />
                <img src={Plan_your_lessons} alt="" className='object-contain  lg:-ml-36 lg:-mt-5 -mt-16
                ' />
            </div>

            <div className='mt-[110px] items-center justify-between'>

                <Bttn childern={"Lrean More"} active={true} linkto={"./sign"}></Bttn>
            </div>

        </div>
    )
}

export default Language
