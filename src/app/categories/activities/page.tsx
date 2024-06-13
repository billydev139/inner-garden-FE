'use client'

import CategoriesPageLayout from '@/components/CategoriesPageLayout'
import { usePathname } from 'next/navigation'
import React from 'react'

const Activities: React.FC = () => {
  const pathname = usePathname();

    return (
      <div className={`${pathname.includes('/activities') ? 'theme-green':'theme-blue'}`}>
        <CategoriesPageLayout />
      </div>
  )
} 

export default Activities