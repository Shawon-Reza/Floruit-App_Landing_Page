import React from 'react'
import Header from './Header'
import ImagePardHeroSection from './ImagePardHeroSection'
import AnimatedHero from './AnimatedHero'

const HeroPage = () => {
  return (
    <div className='xl:px-6'>
      <section>
        <Header></Header>
      </section>



      <section>
        <ImagePardHeroSection></ImagePardHeroSection>
        {/* <AnimatedHero></AnimatedHero> */}
      </section>
    </div>
  )
}

export default HeroPage