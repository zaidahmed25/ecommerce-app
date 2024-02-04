import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../../screens/Home'
import ResponsiveAppBar from '../../components/Navbar'
import SingleProduct from '../../screens/SingleProduct'


const Routerconfig = () => {
    return (
        <BrowserRouter>
        <ResponsiveAppBar />
            <Routes>
                <Route path='' element={<Home />} />
                <Route path='product/:id' element={<SingleProduct />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routerconfig