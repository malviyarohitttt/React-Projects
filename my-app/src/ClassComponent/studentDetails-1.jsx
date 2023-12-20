// Student Details Project using Class Component(using activeBranch state)


import React, { Component } from 'react'
import Data from "./data.jsx";
import './studentDetails-1.css'
export default class studentDetails1 extends Component {

constructor(){
  super()
  this.state={
    studentDetails:Data,
    activeBranch:"All"
  }
}

addStudent= ()=>{
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
    const Duplicate = this.state.studentDetails.findIndex((student) => {
      return student.rollNumber === rollNumber;
    });
  //   console.log(Duplicate);
    if (Duplicate >= 0) {
      window.alert("Student Alredy Exist");
    } else {
      const newStudent = { rollNumber, sname, email, age, mobile, branch };
      this.setState({
        studentDetails: [...this.state.studentDetails, newStudent],
      });
      window.alert("Student Record Added Successfully");
    }
  }
}

deleteStudent = (rollNumber) => {
  if (window.confirm('Are you sure!')) {
    const indexToDelete = this.state.studentDetails.findIndex(student => student.rollNumber === rollNumber);
    
    this.state.studentDetails.splice(indexToDelete, 1);
    this.setState({ studentDetails: [...this.state.studentDetails] });
  }
};
  render() {
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
            <button onClick={this.addStudent} className="btn btn-outline-primary">Add Student</button>
            <div className="btns d-flex justify-content-between" style={{ width: 500 }}> 
                <button onClick={() =>{ this.setState({activeBranch: "All"});}} className="btn btn-primary">ALL({this.state.studentDetails.filter((student)=>{return student}).length})</button> 
                <button onClick={() =>{ this.setState({activeBranch: "CSE"});}} className="btn btn-primary">CSE({this.state.studentDetails.filter((student)=>{return student.branch==="CSE"}).length})</button> 
                <button onClick={() =>{ this.setState({activeBranch: "IT"}); }} className="btn btn-primary">IT ({this.state.studentDetails.filter((student)=>{return student.branch==="IT"}).length})</button> 
                <button onClick={() =>{ this.setState({activeBranch: "HR"}); }} className="btn btn-primary">HR ({this.state.studentDetails.filter((student)=>{return student.branch==="HR"}).length})</button> 
                <button onClick={() =>{ this.setState({activeBranch: "AI"}); }} className="btn btn-primary">AI ({this.state.studentDetails.filter((student)=>{return student.branch==="AI"}).length})</button> 
                <button onClick={() =>{ this.setState({activeBranch: "ML"}); }} className="btn btn-primary">ML ({this.state.studentDetails.filter((student)=>{return student.branch==="ML"}).length})</button>
            </div>
        </div>
        <div className="tableDiv" id="tableDiv">
          <table className="table">
                <thead> 
                    <tr>
                        <th>S.No</th>
                        <th>Roll No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Mobile</th>
                        <th>Branch</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody className="tablebody">
                    {this.state.studentDetails.filter((student,index)=>{return this.state.activeBranch==="All" || student.branch===this.state.activeBranch}).map((student, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{student.rollNumber}</td>
                        <td>{student.sname}</td>
                        <td>{student.email}</td>
                        <td>{student.age}</td>
                        <td>{student.mobile}</td>
                        <td>{student.branch}</td>
                        <td><button className='btn btn-primary' onClick={() =>{ this.deleteStudent(student.rollNumber); }}>Delete</button></td>
                    </tr>
                    ))}
                </tbody>
          </table>
        </div>
      </div>
    );
  }
}