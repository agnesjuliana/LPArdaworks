import React from 'react'
import NavbarHome from '../../fragments/Navbar'
import TopMenu from '../../fragments/TopMenu'

export default function Home() {
  return (
    <div className='root'>
      <NavbarHome/>
      <TopMenu/>
    </div>
  )
}
