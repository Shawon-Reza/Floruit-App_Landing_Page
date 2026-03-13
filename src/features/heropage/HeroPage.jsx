import React from 'react'
import Header from './Header'
import ImagePardHeroSection from './ImagePardHeroSection'

const HeroPage = () => {
  return (
    <div className='min-h-screen xl:px-6'>
      <section>
        <Header></Header>
      </section>



      <section>
        <ImagePardHeroSection></ImagePardHeroSection>
      </section>
    </div>
  )
}

export default HeroPage