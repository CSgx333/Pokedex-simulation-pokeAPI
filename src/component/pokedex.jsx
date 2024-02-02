import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Element from './element'
import Size from './size'
import Status from './status'

function Pokedex() {
  const [poke, setPoke] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [number, setNumber] = useState(1);
  const [screen, setScreen] = useState(0);

  useEffect(()=>{
    const loadPoke = async () =>{
      try{
        setLoading(true);
        let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`);
        setPoke(response.data);
        setError("");
      }catch(error){
        setError("Something went wrong", error);
      }finally{
        setLoading(false);
      }
    }
    loadPoke();
  }, [number])

  const prePoke = () =>{
    if(number != 1){
      setNumber(number - 1)
    }
  }

  const nextPoke = () =>{
    if(number != 1010){
      setNumber(number + 1)
    }
  }

  const searchPoke = (e) =>{
    e.preventDefault(); //ป้องกันการรีเฟรชหน้า
    if(parseInt(e.target.number.value) != 0){
      setNumber(parseInt(e.target.number.value))
    }
  }

  const showScreen = () =>{
    if(screen == 0){
      return <Element data={poke} />
    }else if(screen == 1){
      return <Size data={poke} />
    }else{
      return <Status data={poke} />
    }
  } 

  return (
    
    <div className="bg-white">
        {number ? (
          <div className="mt-6 flex justify-center items-center">         

              <div className="py-5 flex items-center justify-center">
                <div className="pb-[10px] relative bg-Pokedex overflow-hidden rounded-l-[10px] rounded-tr-[10px] rounded-br-[5px] border-b-[8px] lg:border-b-[12px] border-Pokedex2">
                  <img src='./src/assets/img/pokedex1.png' className='py-auto px-auto lg:py-1 lg:px-2 w-[120px] h-[70px] lg:w-[180px] lg:h-[90px]' alt="pokedex1"/>
                  <div className='pb-2'>
                    <div className="bg-Pokedex2 py-[2px] lg:py-1"></div>
                  </div>
                  <div className="px-2 py-1">
                    <div className="px-2 py-5 border-2 border-Pokedex2 rounded-md">
                      <div className="w-full rounded-md bg-gray-100 lg:h-80">
                        <div className="pt-2 flex justify-center gap-2">
                          <div className="w-[4px] h-[4px] lg:w-[7px] lg:h-[7px] bg-Pokedex4 rounded-full border border-Pokedex2"/>
                          <div className="w-[4px] h-[4px] lg:w-[7px] lg:h-[7px] bg-Pokedex4 rounded-full border border-Pokedex2"/>
                        </div>
                        <img src={poke?.sprites?.other?.home?.front_default} alt={poke?.name} className="pb-3 object-cover object-center lg:h-full lg:w-full"/>
                      </div>
                      <div className="mt-2 lg:mt-4 flex justify-center gap-2">
                        <div className="bg-Pokedex4 border border-Pokedex2 rounded-md px-4 py-1"/>
                        <div className="bg-Blue3 border border-Pokedex2 rounded-md px-4 py-1"/>
                      </div>
                      <div className="mt-7 flex justify-evenly">
                        <div className="w-[25px] h-[25px] lg:w-[30px] lg:h-[30px] bg-Slate rounded-full"/>
                        <div className="bg-[url('./src/assets/img/screen.png')] flex justify-center items-center border border-Screen2 rounded-md w-[100px] h-[50px] lg:w-[150px] lg:h-[60px]">
                          <span className='text-white capitalize font-Turret text-sm lg:text-base font-medium'>{poke?.name}</span>
                        </div>
                        <img src='./src/assets/img/button1.png' className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px]" lt="Button1"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              

              <div className="pt-[80px] py-5 flex items-center justify-center">
                <div className='h-[370px] w-[15px] lg:h-[500px] lg:w-[20px] rounded-md bg-gradient-to-r from-Pokedex2 via-Pokedex3 to-Pokedex border-b-[8px] lg:border-b-[12px] border-Pokedex2'>
                  <div className='py-5 lg:py-7'>
                    <div className="bg-Pokedex2 py-[1px]"></div>
                  </div>
                  <div className='py-[290px] lg:py-[415px]'>
                    <div className="bg-Pokedex2 py-[1px]"></div>
                  </div>
                </div>
              </div>


              <div className="pt-[80px] py-5 flex items-center justify-center">
                <div className="relative bg-Pokedex overflow-hidden rounded-r-[10px] rounded-l-[5px]  border-b-[8px] lg:border-b-[12px] border-Pokedex2">
                  <div className="px-2 py-3">
                      <div className="border-2 border-Pokedex2 rounded-md">
                        <div className="px-4 pt-5 pb-2 lg:pb-5">
                          <div className="flex justify-center items-center bg-[url('./src/assets/img/screen2.png')] text-white capitalize text-center font-Turret font-medium border border-black rounded-md w-auto h-[65px] lg:w-[300px] lg:h-[100px]">
                            {showScreen()}
                          </div>
                        </div>
                        <div className="px-4">
                          <img src='./src/assets/img/screen3.png' className='w-auto h-auto w-[260px] h-[50px]' alt="Screen3"/>
                        </div>
                        <div className="flex justify-end space-x-3 px-4 py-2">
                          <div className="bg-Slate border border-Pokedex2 rounded-md px-3 py-[2.5px] lg:py-1 lg:px-4"/>
                          <div className="bg-Slate border border-Pokedex2 rounded-md px-3 py-[2.5px] lg:py-1 lg:px-4"/>  
                        </div>
                        <div className="lg:mt-4 px-4 py-3 lg:py-5 flex justify-between gap-3">
                          <div className="gap-3">
                            <button onClick={() => setScreen(0)} className="bg-WPokedex hover:bg-[#9d9d9d] font-bold py-[7px] px-[13px] lg:py-[10px] lg:px-[18px] border-b-[3px] border-GPokedex hover:border-[#3b3a39] rounded mx-[2px]"/>
                            <button onClick={() => setScreen(1)} className="bg-WPokedex hover:bg-[#9d9d9d] font-bold py-[7px] px-[13px] lg:py-[10px] lg:px-[18px] border-b-[3px] border-GPokedex hover:border-[#3b3a39] rounded mx-[2px]"/>
                            <button onClick={() => setScreen(2)} className="bg-WPokedex hover:bg-[#9d9d9d] font-bold py-[7px] px-[13px] lg:py-[10px] lg:px-[18px] border-b-[3px] border-GPokedex hover:border-[#3b3a39] rounded mx-[2px]"/>
                          </div>
                          <div className="w-[25px] h-[25px] lg:w-[30px] lg:h-[30px] border-2 border-Pokedex2 bg-Yellow1 rounded-full"/>
                        </div>
                        <div className="py-2 px-4 flex justify-between gap-3">
                          <button onClick={prePoke} className="relative rounded w-[35px] h-[18px] lg:w-[50px] lg:h-[30px] overflow-hidden group bg-[#323434] border-b-[3px] border-[#1b1c1c] hover:bg-[#202121] text-[#d9d9d9]">
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                          </button>
                          <div className="relative rounded-md shadow-sm">
                            <form onSubmit={searchPoke}>
                              <input type="number" name="number" className="block w-[80px] h-[25px] lg:w-[130px] lg:h-[30px] text-[10px] rounded-md border-0 py-1 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>  
                              <div className="flex items-center justify-center py-8 lg:py-8">
                                <button type="submit" className="box-border relative z-30 inline-flex items-center justify-center w-auto px-7 py-[10px] lg:px-10 lg:py-4 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 border-b-[3px] border-[#433e89] hover:bg-[#4e4a99] rounded-md cursor-pointer group hover:ring-offset-indigo-500 ease focus:outline-none">
                                  <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                                  <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                                </button>
                              </div>
                            </form>
                          </div>
                          <button onClick={nextPoke} className="relative rounded w-[35px] h-[18px] lg:w-[50px] lg:h-[30px] overflow-hidden group bg-[#323434] border-b-[3px] border-[#1b1c1c] hover:bg-[#202121] text-[#d9d9d9]">
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                          </button>
                        </div>
                      </div>
                    </div>
                </div>
              </div>

          </div>
        ) : (
          <p>Loading...</p>
        )}
    </div>
  )
}

export default Pokedex
