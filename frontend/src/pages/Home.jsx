import React from 'react'
import HeroSection from '../components/HeroSection'
import Category from '../components/Category'
import NewArrivals from '../components/NewArrivals'
import MarketingAdds from '../components/MarketingAdds'

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <Category/>
            <NewArrivals />
            <MarketingAdds/>
        </div>
    )
}

export default Home
