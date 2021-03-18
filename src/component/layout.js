import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
const Layout=(props)=>{
return(
    <div>
        <Navbar></Navbar>
        {props.children}
        <Footer></Footer>
    </div>
)

}
export default Layout