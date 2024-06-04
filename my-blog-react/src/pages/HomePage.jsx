import Navbar  from '../components/Navbar'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'
import React from 'react'

function Homepage({blogs}) {
  return (
      <div>
        <Navbar />
        <Blogs blogs={blogs} />     
        <Footer />
      </div> 
  )
}

export default Homepage
