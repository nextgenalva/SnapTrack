import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { IoMdPerson } from 'react-icons/io'
import { IoCartOutline } from 'react-icons/io5'

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl">SnapTrack</a>
                </div>
                <div className="navbar-center flex">
                    <label className="input w-96">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" className="grow" placeholder="Search" />
                    </label>
                </div>
                <div className="navbar-end flex gap-3">
                    <a className=""><IoMdPerson size={24} />
                    </a>
                    <a className=""><FaRegHeart size={24} />
                    </a>
                    <a className=""><IoCartOutline size={24} />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Navbar