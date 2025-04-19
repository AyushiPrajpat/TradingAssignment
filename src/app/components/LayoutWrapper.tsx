'use client'

import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import Navbar from './Navbar'

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  // Hide navbar on /strategy and /portfolio
  const hideNavbar = pathname === '/strategy' || pathname === '/portfolio'  || pathname === '/strategyBuilder' || pathname === '/trading'

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
    </>
  )
}
