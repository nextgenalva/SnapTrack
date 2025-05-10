import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Navbar/Navbar'

const Root = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default Root