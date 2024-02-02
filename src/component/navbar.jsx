import React from 'react'
import { Link } from 'react-router-dom'

function navbar() {
  return (
    
        <nav className="bg-gradient-to-r from-Blue1 to-Blue2">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex flex-shrink-0 items-center">
                        <img className="block h-8 w-auto lg:hidden" src="https://seeklogo.com/images/A/asus-new-2022-logo-6332EEF2DA-seeklogo.com.png" alt="Logo"/>
                        <img className="hidden h-8 w-auto lg:block" src="https://seeklogo.com/images/A/asus-new-2022-logo-6332EEF2DA-seeklogo.com.png" alt="Logo"/>
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                        
                        <Link to="/" className="text-gray-100 hover:bg-Blue1 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Home</Link>
                        <Link to="Rendom" className="text-gray-100 hover:bg-Blue1 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Rendom</Link>
                        <Link to="Pokedex" className="text-gray-100 hover:bg-Blue1 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Pokedex</Link>
                        
                        </div>
                    </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <button type="button" className="rounded-full bg-none p-1 text-gray-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-0.5 focus:ring-offset-gray-100">
                        <span className="sr-only">View notifications</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                        </svg>
                    </button>

                    <div className="relative ml-3">
                        <div>
                        <button type="button" className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-0.5 focus:ring-offset-gray-100" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80" alt=""/>
                        </button>
                        </div>

                        
                    </div>
                    </div>
                </div>
            </div>
            
            <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <Link to="/" className="text-gray-100 hover:bg-Blue1 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Home</Link>
                    <Link to="Rendom" className="text-gray-100 hover:bg-Blue1 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Rendom</Link>
                    <Link to="Pokedex" className="text-gray-100 hover:bg-Blue1 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Pokedex</Link>
                </div>
            </div>
 
        </nav>
  )
}

export default navbar