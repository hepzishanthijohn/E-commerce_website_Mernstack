import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/popular/Popular'
import Offers from '../components/Offers/Offers'
import NewCollections from '../components/NewCollections/NewCollections'
import NewsLeter from '../components/NewsLetter/NewsLeter'
import Navbar from '../components/Navbar/Navbar'
import Popup from './Popup'

const Shop = () => {
  return (
    <div>
        <Popup/>
        <Navbar/>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollections/>
        <NewsLeter/>
       
    </div>
  )
}

export default Shop