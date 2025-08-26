import React from 'react'
import HeroSection from '../components/HeroSection'
import Category from '../components/Category'
import NewArrivals from '../components/NewArrivals'
import MarketingAdds from '../components/MarketingAdds'
import BestSeller from '../components/BestSeller'
import NewsLetterBox from '../components/NewsLetterBox'

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <Category/>
            <NewArrivals />
            <MarketingAdds/>
            <BestSeller/>
            <NewsLetterBox/>
        </div>
    )
}

export default Home
