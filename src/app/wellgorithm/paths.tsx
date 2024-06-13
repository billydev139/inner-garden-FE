import CardSection from '@/components/common/CardSection'
import React from 'react'

const Paths = () => {
  return (
    <>
    <div className='bg-white rounded-[30px] p-10 mt-10'>
      <h2 className='rounded-[55px] py-3 text-white text-center font-black text-[32px] bg-purple-dark'>
      Journey to the (peace)Garden
      </h2>
      <CardSection
        secHeading="Cultivational Psychology"
        bgGradient="linear-gradient(to right, rgba(86, 74, 141, 1), rgba(86, 74, 141, 1))"
        borderColor="#B76EF9"
        mode="slider"
      />
    </div>
    
    </>
  )
}

export default Paths
