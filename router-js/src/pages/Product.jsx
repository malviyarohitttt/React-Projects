import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios';


export default function Product() {

  const [products, setProducts] =useState([]);

  useEffect(() =>{
    axios.get("https://dummyjson.com/products")
    .then((response) =>{
      setProducts(response.data.products)
      // console.log(response.data.products)
    }).catch((error) =>{
      console.log(error)
    })
  },[]);
  return (
    <>
    <NavBar/>
    <div className="container">
      <div className="row border border-dark mt-5 d-flex justify-content-evenly">
        {products.map((product,index)=>{
          return(
            <div className="col-md-4 p-3 mt-2 mb-2" key={index}>
              <div className="border border-success d-flex flex-column align-items-center" style={{height:"420px"}}>
              <img src={product.thumbnail} alt='Product' style={{height:"250px",width:"100%"}}/>
              <h5 className="text-center mt-2" style={{ width:"280px",whiteSpace: "nowrap",overflow: "hidden",textOverflow: "ellipsis"}}>{product.title}</h5>
              <h4 className="text-center text-success mt-2">{product.price}$</h4>
              <button className="btn btn-warning mb-1" style={{width:"320px",color:"white"}}>View Description</button>
              <button className="btn btn-warning" style={{width:"90%",color:"white"}}>Add To Cart</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
    </>
  )
}
