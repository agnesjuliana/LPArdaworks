import React from 'react'
import Nav from '../../fragments/nav'
import Footer from '../../fragments/footer'
import Main5 from '../../fragments/main-5'

export default function Home() {
  return (
    <div className='row justify-content-center'>
      <div className='col-9'>
        <Nav />
        <Main5/>
        <Footer />
      </div>
    </div>
  )
}
