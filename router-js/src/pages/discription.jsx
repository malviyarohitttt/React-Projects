import React from 'react'
import NavBar from './NavBar'


export default function discription() {
  return (
    <>
    <NavBar/>
    <h1 className='text-center'>Discription</h1>
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-6 border border-grey" style={{height:"400px"}}>
                <div className='border border-dark' style={{height:"260px"}}><h2>Hello</h2></div>
                <div className='border border-dark' style={{height:"140px"}}><h2>Hello</h2></div>
            </div>
            <div className="col-md-6 border border-grey" style={{height:"400px"}}>
                <h1>HELLO</h1>
            </div>
        </div>
    </div>
    </>
  )
}
