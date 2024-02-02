import React from 'react'

function status({ data }) {
    return (
        <ul>
            <li className='text-white capitalize font-Turret font-medium text-sm lg:text-base'>HP : {data?.stats[0]?.base_stat}</li>
            <li className='text-white capitalize font-Turret font-medium text-sm lg:text-base'>ATK : {data?.stats[1]?.base_stat}</li>
            <li className='text-white capitalize font-Turret font-medium text-sm lg:text-base'>DEF : {data?.stats[2]?.base_stat}</li>
        </ul>
    )
}

export default status