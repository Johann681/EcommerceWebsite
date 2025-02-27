import React from 'react'
import Nav from './components/nav'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Reviews from './components/Reviews'
import Story from './components/Story'
import Deals from './components/Deals'
import Categories from './components/Categories'

export default function App() {
  return (
   <div>
    <Nav />
    <Hero />
    <Categories/>
    <Deals/>
    <Reviews/>
    <Story/>
    <Footer/>
   </div>
  )
}
