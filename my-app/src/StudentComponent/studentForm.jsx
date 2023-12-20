import React from 'react'

export default function studentForm({activeBranch,setActiveBranch,studentList,setStudentList}) {
const addStudent= ()=>{
    let sname = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let age = document.querySelector("#age").value;
    let mobile = document.querySelector("#mobile").value;
    let branch = document.querySelector("#branch").value;
    let rollNumber = document.querySelector("#rollNumber").value;

    if (
      rollNumber.length < 1 ||
      sname.length < 1 ||
      email.length < 1 ||
      age.length < 1 ||
      mobile.length < 1
    ) {
      window.alert("Please Fill All The Details!");
    } else {
    //   console.log(rollNumber);
      const Duplicate = studentList.findIndex((student) => {
        return student.rollNumber === rollNumber;
      });
    //   console.log(Duplicate);
      if (Duplicate >= 0) {
        window.alert("Student Alredy Exist");
      } else {
        const newStudent = { rollNumber, sname, email, age, mobile, branch };
        setStudentList((prevStudentList) => [...prevStudentList, newStudent]);
        window.alert("Student Record Added Successfully");
      }
    }
  }
  return (
    <div className="conatiner mt-5">
        <h2 className="text-center text-secondary mb-3 heading">Student Details</h2>
        <div className="row">
          <div className="col-md-6">
            <input type="text" id="name" className="form-control mt-2 mb-2" placeholder="Enter Your Name" required />
          </div>
          <div className="col-md-6">
            <input type="email" id="email" className="form-control mt-2 mb-2" placeholder="Enter Your Email" required/>
          </div>
          <div className="col-md-6">
            <input type="number" id="rollNumber" className="form-control mt-2 mb-2" placeholder="Enter Your Roll Number" required/>
          </div>
          <div className="col-md-6">
            <input type="number" id="age" min={5} max={30} className="form-control mt-2 mb-2" placeholder="Enter Your Age" required/>
          </div>
          <div className="col-md-6">
            <input type="number" id="mobile" min={6000000000} max={9999999999} className="form-control mt-2 mb-2" placeholder="Enter Your Mobile Number" required/>
          </div>
          <div className="col-md-6">
                <select name="branch" id="branch" className="form-control mt-2 mb-2">   
                    <option>Select Branch</option>
                    <option value="CSE">CSE</option>
                    <option value="IT">IT</option>
                    <option value="HR">HR</option>
                    <option value="AI">AI</option>
                    <option value="ML">ML</option>
                </select>
          </div>
        </div>
        <div className="d-flex justify-content-between mb-5">
            <button className="btn btn-outline-primary" onClick={addStudent}>Add Student</button>
            <div className="btns d-flex justify-content-between" style={{ width: 500 }}> 
                <button disabled={activeBranch==="All" ? true : false} onClick={() =>{setActiveBranch("All")}} className="btn btn-primary">All</button> 
                <button disabled={activeBranch==="CSE" ? true : false} onClick={() =>{setActiveBranch("CSE")}} className="btn btn-primary">CSE</button> 
                <button disabled={activeBranch==="IT" ? true : false} onClick={() =>{setActiveBranch("IT") }} className="btn btn-primary">IT</button> 
                <button disabled={activeBranch==="HR" ? true : false} onClick={() =>{setActiveBranch("HR") }} className="btn btn-primary">HR</button> 
                <button disabled={activeBranch==="AI" ? true : false} onClick={() =>{setActiveBranch("AI") }} className="btn btn-primary">AI</button> 
                <button disabled={activeBranch==="ML" ? true : false} onClick={() =>{setActiveBranch("ML") }} className="btn btn-primary">ML</button>
            </div>
        </div>
      </div>
  )
}
