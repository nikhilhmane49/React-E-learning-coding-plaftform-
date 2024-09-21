import React from 'react'
// import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation'

import Bttn from '../HomePage/Bttn'
function CodeBolds({ postion, heading, subheading, btt1, btt2, codeblock, codecolo }) {
    return (
        <div className={`flex ${postion} my-20 justify-between gap-10`}>
            <div className='w-[50%] flex flex-col gap-8 text-white ml-9'>
                {heading}
                <div className='text-gray-300 font-bold'>
                    {subheading}
                </div>
                <div className='flex gap-7 mt-7'>
                    <Bttn active={btt1.active} linkto={btt1.linkto} childern={btt1.text} >
                        {/* <div className='flex gap2 items-center'>
                            {btt1.text}
                            <FaArrowRight/>
                       </div> */}
                    </Bttn>

                    <Bttn active={btt2.active} linkto={btt2.linkto} childern={btt2.text}>

                    </Bttn>
                </div>
            </div>


            <div className='flex flex-row  h-fit w-[100%] py-4 lg:w-[700px] border-2 border-gray-600 mr-10 bg-gray-800 shadow-[8px_-5px_20px_-5px] shadow-yellow-200'>
                <div className='ml-5 flex flex-col w-[10%] text-2xl font-bold text-gray-400 text-center'>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>
                </div>

                <div className={`w-[90%] flex flex-col  font-bold ${codecolo}`}>
                    <TypeAnimation
                        sequence={[codeblock, 5000, " "]}
                        repeat={Infinity}
                        cursor={true}
                        style={
                            {
                                whiteSpace: "pre-line",
                                display: "block"
                            }

                        }
                        omitDeletionAnimation={true}
                    />

                </div>
            </div>
        </div>
    )
}

export default CodeBolds
