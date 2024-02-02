import React from 'react'

function size({ data }) {
    return (
        <ul>
            <li className='text-white capitalize font-Turret font-medium text-sm lg:text-base'>Height : {data?.height} <span className='lowercase'>m</span></li>
            <li className='text-white capitalize font-Turret font-medium text-sm lg:text-base'>Weight : {data?.weight} <span className='lowercase'>kg</span></li>
        </ul>
    )
}

export default size