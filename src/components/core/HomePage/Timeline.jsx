import React from 'react'
import logo1 from '../../../assets/img/logo1.png'
import logo2 from '../../../assets/img/logo2.png'
import logo3 from '../../../assets/img/logo3.png'
import logo4 from '../../../assets/img/logo4.png'
import timelinimg from '../../../assets/img/timelinimg.png'

const Timelineitem = [
    {
        logo: logo1,
        heading: "Leadership",
        subheading: "Fully committed to the sucessces company"
    },
    {
        logo: logo2,
        heading: "Leadership",
        subheading: "Fully committed to the sucessces company"
    },
    {
        logo: logo3,
        heading: "Leadership",
        subheading: "Fully committed to the sucessces company"
    },
    {
        logo: logo4,
        heading: "Leadership",
        subheading: "Fully committed to the sucessces company"
    }
]

function Timeline() {
    return (
        <div className='relative mx-auto  w-11/12 max-w-maxContent items-center justify-between flex flex-row mt-[80px]'>
            <div className='flex flex-col w-[45%] gap-10'>
                {

                    Timelineitem.map((element, index) => {
                        return (
                            <div className='flex flex-row gap-7' key={index}>

                                <div className='w-[50px] h-[50] bg-white flex items-center '>
                                    <img src={element.logo}
                                       />
                                </div>
                                <div className='flex flex-col'>
                                    <p className='text-2xl font-semibold'>{element.heading}</p>
                                    <p className='text-base'>{element.subheading}</p>

                                </div>

                             
                            </div>
                        )
                    })

                }


               
            </div>

            <div className='w-[55%] relative '>
                <div className='shadow-[10px_-5px_50px_-5px] shadow-blue-500'>
                <img src={timelinimg}
                        className=' object-cover h-fit shadow-[12px_12px_0px_0px] shadow-gray-900' />
                    </div>
                <div className='absolute bg-green-900 text-white uppercase flex flex-row  h-[100px]  items-center gap-10 
                        left-[50%] translate-x-[-50%] translate-y-[-40%]  '>
                    <div className='flex flex-row items-center gap-5 border-r-4 p-4 ml-11'>
                        <p className='text-3xl text-white font-bold'>10</p>
                        <p className='text-1xl text-green-400 '>year of Exprencise</p>
                    </div>
                    <div className='flex flex-row items-center gap-5 p-4'>
                        <p className='text-3xl text-white font-bold'>250</p>
                        <p className='text-1xl text-green-400'>type of courses</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Timeline
