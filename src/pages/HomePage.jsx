import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import ApartmanList from '../components/ApartmanList'
import Service from '../components/Service'
import Banner from '../components/Banner'
import News from '../components/News'

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Banner/>
      <ApartmanList/>
      <Service/>
      <News/>
    </div>
  )
}

export default HomePage
