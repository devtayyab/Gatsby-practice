import React from 'react'
import Layout from '../component/layout'
import {Router} from '@reach/router'
import Productone from '../template/product1'
import Producttwo from '../template/product2'
import Default from '../component/main'
const Product = () => {


    return (
       
            <Router basepath='/product'>
            <Productone path="/product1" />
            <Producttwo path="/product2" />
            <Default path="/" />
            </Router>
       
    )
}
export default Product