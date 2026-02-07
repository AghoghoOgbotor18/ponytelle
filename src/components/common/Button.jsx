import React from 'react'
import { useDispatch } from 'react-redux'

const Button = ({product}) => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
        </div>
    )
}

export default Button
