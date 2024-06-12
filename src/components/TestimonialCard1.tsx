import styles from '@/styles'
import React from 'react'
import Button from './common/Button'

const TestimonialCard1: React.FC  = () => {
  return (
    // need to change
    <div className="bg-[url('../assets/banner9.png')] bg-cover bg-center lg:w-[50%] p-6 lg:p-12 lg:my-4 rounded-lg lg:h-[350px]">
      <h1 className={`${styles.headingH1} text-white w-[80%]`}>Journal the peace, blossom inside.</h1>
      <h2 className={`${styles.subHeading} text-white py-8 w-[80%]`}>Master the new art of “emotional gardening,” and contribute to humanity’s Big Bloom.</h2>
      <Button btnText='start journaling' variant='white' />
    </div>
  )
}

export default TestimonialCard1
