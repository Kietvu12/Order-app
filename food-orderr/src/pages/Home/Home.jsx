import React, { useState } from 'react'
import './Home.css'
import Header from '../../component/Header/Header'
import ExploreMenu from '../../component/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../component/FoodDisplay/FoodDisplay'
import AppDownload from '../../component/AppDownload/AppDownload'
import AboutSection from './component/AboutSection'
import SignatureMenu from './component/SignatureMenu'
import RestaurantLocations from './component/RestaurantLocations'
const Home = () => {
  const [category, setCategory] = useState("All")

  return (
    <div>
      <Header />
      <AboutSection />
      <SignatureMenu />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <RestaurantLocations />
    </div>
  )
}

export default Home