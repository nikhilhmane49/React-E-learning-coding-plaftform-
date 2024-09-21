import React from 'react'
import { Link } from 'react-router-dom'

function Bttn({childern , active , linkto}) {
    return (
        <Link to={linkto}>
            <div className={`text-center text-1xl px-6 py-3 rounded-md font-bold ${active ? "bg-yellow-400" : "bg-gray-700"}
            hover:scale-95 transition-all duration-200 text-black`}>
                {childern}
            </div>
        </Link>
    )
}

export default Bttn
