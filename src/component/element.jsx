import React from 'react'

function element({ data }) {
    const type = (name) => {
        if(name == 'bug'){
            return <div className={`bg-[#a8b820] text-white font-semibold text-center rounded-full outline-none transition duration-100 px-2 py-2 text-xs/[1px] lg:text-sm/[1px] uppercase`}>{name}</div>   
        }else if(name == 'dark'){
            return <div className={`bg-[#705848] text-white font-semibold text-center rounded-full outline-none transition duration-100 px-2 py-2 text-xs/[1px] lg:text-sm/[1px] uppercase`}>{name}</div>
        }else if(name == 'dragon'){
            return <div className={`bg-[#7038f8] text-white font-semibold text-center rounded-full outline-none transition duration-100 px-2 py-2 text-xs/[1px] lg:text-sm/[1px] uppercase`}>{name}</div>
        }else if(name == 'electric'){
            return <div className={`bg-[#f8d030] text-white font-semibold text-center rounded-full outline-none transition duration-100 px-2 py-2 text-xs/[1px] lg:text-sm/[1px] uppercase`}>{name}</div>
        }else if(name == 'fairy'){
            return <div className={`bg-[#f8a0e0] text-white font-semibold text-center rounded-full outline-none transition duration-100 px-2 py-2 text-xs/[1px] lg:text-sm/[1px] uppercase`}>{name}</div>
        }else if(name == 'fighting'){
            return <div className={`bg-[#903028] text-white font-semibold text-center rounded-full outline-none transition duration-100 px-2 py-2 text-xs/[1px] lg:text-sm/[1px] uppercase`}>{name}</div>
        }else if(name == 'fire'){
            return <div className={`bg-[#f05030] text-white font-semibold text-center rounded-full outline-none transition duration-100 px-2 py-2 text-xs/[1px] lg:text-sm/[1px] uppercase`}>{name}</div>
        }else if(name == 'flying'){
            return <div className={`bg-[#a890f0] text-white font-semibold text-center rounded-full outline-none transition duration-100 px-2 py-2 text-xs/[1px] lg:text-sm/[1px] uppercase`}>{name}</div>
        }else if(name == 'ghost'){
            return <div className={`bg-[#705898] text-white font-semibold text-center rounded-full outline-none transition duration-100 px-2 py-2 text-xs/[1px] lg:text-sm/[1px] uppercase`}>{name}</div>
        }else if(name == 'grass'){
            return <div className={`bg-[#78c850] text-white font-semibold text-center rounded-full outline-none transition duration-100 px-2 py-2 text-xs/[1px] lg:text-sm/[1px] uppercase`}>{name}</div>
        }else if(name == 'ground'){
            return <div className={`bg-[#e0c068] text-white font-semibold text-center rounded-full outline-none transition duration-100 px-2 py-2 text-xs/[1px] lg:text-sm/[1px] uppercase`}>{name}</div>
        }else if(name == 'ice'){
            return <div className={`bg-[#98d8d8] text-white font-semibold text-center rounded-full outline-none transition duration-100 px-2 py-2 text-xs/[1px] lg:text-sm/[1px] uppercase`}>{name}</div>
        }else if(name == 'normal'){
            return <div className={`bg-[#a8a878] text-white font-semibold text-center rounded-full outline-none transition duration-100 px-2 py-2 text-xs/[1px] lg:text-sm/[1px] uppercase`}>{name}</div>
        }else if(name == 'poison'){
            return <div className={`bg-[#a040a0] text-white font-semibold text-center rounded-full outline-none transition duration-100 px-2 py-2 text-xs/[1px] lg:text-sm/[1px] uppercase`}>{name}</div>
        }else if(name == 'psychic'){
            return <div className={`bg-[#f85888] text-white font-semibold text-center rounded-full outline-none transition duration-100 px-2 py-2 text-xs/[1px] lg:text-sm/[1px] uppercase`}>{name}</div>
        }else if(name == 'rock'){
            return <div className={`bg-[#b8a038] text-white font-semibold text-center rounded-full outline-none transition duration-100 px-2 py-2 text-xs/[1px] lg:text-sm/[1px] uppercase`}>{name}</div>
        }else if(name == 'shadow'){
            return <div className={`bg-[#403246] text-white font-semibold text-center rounded-full outline-none transition duration-100 px-2 py-2 text-xs/[1px] lg:text-sm/[1px] uppercase`}>{name}</div>
        }else if(name == 'steel'){
            return <div className={`bg-[#b8b8d0] text-white font-semibold text-center rounded-full outline-none transition duration-100 px-2 py-2 text-xs/[1px] lg:text-sm/[1px] uppercase`}>{name}</div>
        }else if(name == 'unknown'){
            return <div className={`bg-[#68a090] text-white font-semibold text-center rounded-full outline-none transition duration-100 px-2 py-2 text-xs/[1px] lg:text-sm/[1px] uppercase`}>{name}</div>
        }else if(name == 'unknown'){
            return <div className={`bg-[#68a090] text-white font-semibold text-center rounded-full outline-none transition duration-100 px-2 py-2 text-xs/[1px] lg:text-sm/[1px] uppercase`}>{name}</div>
        }else if(name == 'water'){
            return <div className={`bg-[#6890f0] text-white font-semibold text-center rounded-full outline-none transition duration-100 px-2 py-2 text-xs/[1px] lg:text-sm/[1px] uppercase`}>{name}</div>
        }
    }

    return (
        <ul>
            {data?.types?.map((ty, idx) => (
                <li key={idx} className='py-1'>
                    {type(ty?.type?.name)}
                </li>
            ))}
        </ul>
    )
}

export default element