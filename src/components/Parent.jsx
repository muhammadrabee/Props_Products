import React from 'react'
import { Product_list } from '../components/product_data/Data.jsx'
import Child from './Child.jsx'

const Parent = () => {
    return (
        <div>
            <Child Product={Product_list}/>
            </div>
    )
}

export default Parent
