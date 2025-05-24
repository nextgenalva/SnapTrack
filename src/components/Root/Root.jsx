import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Root = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Root