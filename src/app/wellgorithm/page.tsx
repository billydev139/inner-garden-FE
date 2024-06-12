import Images from '@/assets'
import CategoriesSlider from '@/components/common/CategoriesSlider'
import Image from 'next/image'
import React from 'react'

const Wellgorithm = () => {
  return (
    <>
    <CategoriesSlider/>
    <div className='container'>

    <Image
        src={Images.banner1}
        alt="banner image"
        className="rounded-xl lg:relative"
        />
        </div>
    </>
  )
}

export default Wellgorithm