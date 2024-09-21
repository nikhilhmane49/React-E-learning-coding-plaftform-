import React, { useState } from 'react'

import { HomePageExplore } from '../../../assets/Data/Exporal';
import HigligthText from './HigligthText';

import Courescard from './Courescard';

const tabName = [
    "Free",
    "New to coding",
    "Most popular",
    "Skill paths",
    "Career paths",
]

function Expoler() {

    const [currentTab, setCurrentTab] = useState(tabName[0]);

    const [currentCoures, setcurrentCoures] = useState(HomePageExplore[0].courses);

    const [currentcard, setcurrentcard] = useState(HomePageExplore[0].courses[0].heading);

    // HomepageExplore[0].coures[0].heading


    const setMycard = (value) => {
        setCurrentTab(value);
        const result = HomePageExplore.filter((coures) => coures.tag == value);
        setcurrentCoures(result[0].courses);
        setcurrentcard(result[0].courses[0].heading);
        
}

    return (
        


        <>
            
            <div className='flex flex-col items-center relative'>
            
            <div className='text-white text-4xl font-semibold  text-center mb-3'>
                Unlock the
                <HigligthText text={"Power of code"}/>
            </div>

            <div>
                <p className='text-1xl text-white text-center mb-2 '>
                    Learn to bulid anything you can imagin
                </p>
            </div>

            <div className='flex flex-row gap-x-11 bg-gray-700 items-center p-2 rounded-full
            text-center w-[65%] mt-14 mb-10 gap-5'>
                {
                    tabName.map((Element, index) => {
                        return (
                            <div
                                className={` text-[18px]  flex flex-row items-center gap-2 ${currentTab === Element
                                        ? "bg-gray-900 text-white font-medium"
                                        : "text-gray-100"
                                    } px-7 py-[7px] rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-white`}
                                key={index}
                                onClick={() => setMycard(Element)}
                            >
                               { Element }    
                    </div>
                    )
                     
                      
                    })
                
                }
                </div>



                <div className='lg:mt-[120px]'>
                </div>



                <div className="lg:absolute  justify-center lg:gap-0 flex lg:justify-between flex-wrap w-[90%] lg:bottom-[0] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[70%] text-black lg:mb-0 mb-7 lg:px-0 px-3 ml-5 mr-5">

                        {
                            currentCoures.map((Element, index) => {
                                return (
                                    <Courescard
                                        key={index}
                                        cardData={Element}
                                        currentcardv={currentcard}
                                        setcurrentcardv={setcurrentcard}
                                    />
                                )
                            })
                        }
                    </div>


             </div>
               
        </>


    )
}

export default Expoler
