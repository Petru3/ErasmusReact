import React from 'react'
import '../Styling/HomeCSS/style.css'

import Intro from '../Components/HomeComponent/Intro'
import TextForm from '../Components/HomeComponent/TextForm'
import Cards from '../Components/HomeComponent/Cards'
import DevInfo from '../Components/HomeComponent/DevInfo'
import Accesories from '../Components/HomeComponent/Accesories'

function HomePage() {
  return (
    <div className='container'>
      <Intro />
      <TextForm />
      <Cards />
      <DevInfo />
      <Accesories />
    </div>
  )
}

export default HomePage