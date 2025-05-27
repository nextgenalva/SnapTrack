import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import NavCategories from '../Navbar/NavCategories'

const Root = () => {
    return (
        <>
            <Navbar />
            <NavCategories />
            <Outlet />
            {/* <Footer /> */}
        </>
    )
}

export default Root