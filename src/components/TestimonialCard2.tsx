import styles from '@/styles'
import React from 'react'
import Button from './common/Button'

const TestimonialCard2: React.FC  = () => {
  return (
    <div className="bg-[url('../assets/banner8.png')] bg-cover bg-center lg:w-[50%] p-6 lg:p-10 lg:my-4 rounded-lg lg:h-[350px] h-[350px] my-4">
        <span className='text-3xl text-white font-black'>&quot;</span>

      <h1 className={`${styles.headingH1} text-white`}>AI will help us build all kinds of cathedrals of the mind, many of which we could not have built before.</h1>
      <h2 className={`${styles.subHeading} text-white py-4`}>—  Reid Hoffman</h2>
    </div>
  )
}

export default TestimonialCard2
