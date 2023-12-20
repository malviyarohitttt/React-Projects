import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import axios from 'axios';
import ApiEndPoint from '../ApiEndPoint/ApiEndPoint';

function Singnin() {

  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [msg,setMsg] = useState();
  const navigate = useNavigate()
  
  const doctorSingnin= async (event)=>{
    event.preventDefault();
    try {
      let response = await axios.post(ApiEndPoint.doctorSignIn,{email,password})
      // console.log(response.data.type)

      if(response.data.status){
        let currentUser = response.data.data;
        delete currentUser.password;
        currentUser.type = response.data.type;

        sessionStorage.setItem("current_user", JSON.stringify(currentUser));
        sessionStorage.setItem("token",response.data.msg);
        navigate("/dashboard/profile")
      }
      else{
        setMsg(response.data.msg)
      }
    } 
    catch (err) {
      console.log(err)
    }
    
  }
  return <>
  <Header/>
  <section className="book_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col">
          <form onSubmit={doctorSingnin}>
            <h4>
              Sign <span>In</span>
            </h4>
            <div className="form-row ">
              <div className="form-group col-lg-4">
                <label htmlFor="inputEmail">Email</label>
                <input onChange={(event)=>setEmail(event.target.value)} type="email" className="form-control" id="inputEmail" placeholder="Enter Your Email" />
              </div>
              <div className="form-group col-lg-4">
                <label htmlFor="inputPassword">Password</label>
                <input onChange={(event)=>setPassword(event.target.value)} type="password" className="form-control" id="inputPassword" placeholder="Enter Your Password" />
              </div>
            </div>
            <div className="btn-box">
              <button className='btn btn-denger' type="submit">Submit Now</button><br/>
              <small><b style={{textTransform:"capitalize"}}>{msg}</b></small>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
  </>
}

export default Singnin
