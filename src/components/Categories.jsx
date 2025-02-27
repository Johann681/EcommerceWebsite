import React from 'react'
import img1 from '../assest/cart1.jpg'

export default function Categories() {
  return (
    <div>
    {cart.map((carts) => (
        <div key={carts.id}>
            <img src={cart.image} alt="an image" />
            <h2>{cart.name}</h2>
        </div>
    ))}
    </div>
  )
}

const cart = [
    {
        id:1,
        image:img1,
        name:'Casual wear',
    },

    {
        id:2,
        image:img1,
        name:'Western wear',
    },

    {
        id:3,
        image:img1,
        name:'Ethnic wear',
    },

    {
        id:4,
        image:img1,
        name:'Kids wear',
    }
]
