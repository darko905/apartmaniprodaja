import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import ApartmanList from '../components/ApartmanList'
import Service from '../components/Service'
import Banner from '../components/Banner'

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Banner/>
      <ApartmanList/>
      <Service/>
    </div>
  )
}

export default HomePage
