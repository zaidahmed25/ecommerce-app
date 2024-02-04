import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../../screens/Home'
import ResponsiveAppBar from '../../components/Navbar'


const Routerconfig = () => {
    return (
        <BrowserRouter>
        <ResponsiveAppBar />
            <Routes>
                <Route path='' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routerconfig