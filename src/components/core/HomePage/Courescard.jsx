import React from 'react';

function Courescard({ cardData, currentcardv, setcurrentcardv }) {
    return (
        <div
            className={`w-[300px] lg:w-[30%] ${currentcardv === cardData?.heading
                    ? "bg-white shadow-[12px_12px_0_0] shadow-yellow-400 text-gray-800"
                    : "bg-gray-800 text-white shadow-[12px_12px_0_0] shadow-gray-700"
                }  text-gray-500 h-[300px] box-border cursor-pointer pl-11 pt-11`}
            onClick={() => setcurrentcardv(cardData?.heading)}
        >
            <div className='flex flex-col'>
                <div className='text-2xl font-semibold'>
                    {cardData.heading}
                </div>
                <div className='mt-3 w-[70%]'>
                    {cardData.description}
                </div>
                <div className='flex flex-row gap-8 mt-14'>
                    <span>{cardData.level}</span>
                    <span>{cardData.lessonNumber}</span>
                </div>
            </div>
        </div>
    );
}

export default Courescard;
