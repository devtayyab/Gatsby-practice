import React from 'react'
import Layout from '../component/layout'
import {Link} from 'gatsby'
export default ()=>{


    return(
    <Layout>
         
        <Link to="/product/product1">
            <p>Product1</p>
        </Link>
        <Link to="product/product2">
            <p>Product2</p>
        </Link>
            <p>This is default page</p>
    </Layout>
    )
}
