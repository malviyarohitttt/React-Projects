import React from 'react'
import NavBar from './NavBar'


export default function AboutUs() {
  return (
    <>
    <NavBar/>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="box mt-4" style={{border:"2px solid black", height:"400px"}}>
            <h2 className='text-center mt-3'>AboutUs Component</h2>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}
