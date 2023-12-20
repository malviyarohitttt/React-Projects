// Student Details Project using Class Component(Without using activeBranch state)

import React, { Component } from 'react'
import Data from "./data.jsx";
import './studentDetails.css'
export default class studentDetails extends Component {

  constructor(){
    super()
    this.state={
      studentDetails:Data
    }
  }

  addStudent= ()=>{
    let sname = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let age = document.querySelector("#age").value;
    let mobile = document.querySelector("#mobile").value;
    let branch = document.querySelector("#branch").value;
    let rollNumber = document.querySelector("#rollNumber").value;


    if (rollNumber.length < 1 || sname.length < 1 || email.length < 1 || age.length < 1 || mobile.length < 1) {
      window.alert("Please Fill All The Details!");
    } else {
      const isDuplicate = this.state.studentDetails.some(element => {return element.rollNumber === rollNumber});
      console.log(rollNumber);
      console.log(isDuplicate);
      if (isDuplicate) {
        window.alert("Student Alredy Exist!");
      } else {
        const newStudent = { rollNumber,sname, email, age, mobile, branch };
        this.setState({
          studentDetails: [...this.state.studentDetails, newStudent],
        });
        window.alert("Student Added Successfully")
      }
    }
  }

  // filterbtnCSE = ()=>{
  //   const cseStudents = this.state.studentDetails.filter(
  //     (element) => element.branch === "CSE"
  //   );

  //   // Render the filtered data in the tableDiv
  //   let tableDiv = document.getElementById("tableDiv");
  //   tableDiv.innerHTML = ""; // Clear previous content

  //   // Create the table element
  //   const table = document.createElement("table");
  //   table.setAttribute("class","table")

  //   // Create the table header
  //   const thead = document.createElement("thead");
  //   const headerRow = document.createElement("tr");

  //   const headers = ["Sno.", "Name", "Email", "Age", "Mobile","Branch"];

  //   headers.forEach((headerText) => {
  //     const th = document.createElement("th");
  //     th.textContent = headerText;
  //     headerRow.appendChild(th);
  //   });

  //   thead.appendChild(headerRow);
  //   table.appendChild(thead);

  //   // Create and append table rows for each student
  //   const tbody = document.createElement("tbody");

  //   cseStudents.forEach((student, index) => {
  //     const row = document.createElement("tr");

  //     // Create and append cells for each student property
  //     const snoCell = document.createElement("td");
  //     snoCell.textContent = index + 1; // Add 1 to start numbering from 1
  //     row.appendChild(snoCell);

  //     const nameCell = document.createElement("td");
  //     nameCell.textContent = student.sname;
  //     row.appendChild(nameCell);

  //     const emailCell = document.createElement("td");
  //     emailCell.textContent = student.email;
  //     row.appendChild(emailCell);

  //     const ageCell = document.createElement("td");
  //     ageCell.textContent = student.age;
  //     row.appendChild(ageCell);

  //     const mobileCell = document.createElement("td");
  //     mobileCell.textContent = student.mobile;
  //     row.appendChild(mobileCell);

  //     const branchCell = document.createElement("td");
  //     branchCell.textContent=student.branch;
  //     row.appendChild(branchCell);

  //     tbody.appendChild(row);
  //   });

  //   table.appendChild(tbody);
  //   tableDiv.appendChild(table);
  // }

  // filterbtnIT = ()=>{
  //   const cseStudents = this.state.studentDetails.filter(
  //     (element) => element.branch === "IT"
  //   );

  //   // Render the filtered data in the tableDiv
  //   let tableDiv = document.getElementById("tableDiv");
  //   tableDiv.innerHTML = ""; // Clear previous content

  //   // Create the table element
  //   const table = document.createElement("table");
  //   table.setAttribute("class","table")

  //   // Create the table header
  //   const thead = document.createElement("thead");
  //   const headerRow = document.createElement("tr");

  //   const headers = ["Sno.", "Name", "Email", "Age", "Mobile","Branch"];

  //   headers.forEach((headerText) => {
  //     const th = document.createElement("th");
  //     th.textContent = headerText;
  //     headerRow.appendChild(th);
  //   });

  //   thead.appendChild(headerRow);
  //   table.appendChild(thead);

  //   // Create and append table rows for each student
  //   const tbody = document.createElement("tbody");

  //   cseStudents.forEach((student, index) => {
  //     const row = document.createElement("tr");

  //     // Create and append cells for each student property
  //     const snoCell = document.createElement("td");
  //     snoCell.textContent = index + 1; // Add 1 to start numbering from 1
  //     row.appendChild(snoCell);

  //     const nameCell = document.createElement("td");
  //     nameCell.textContent = student.sname;
  //     row.appendChild(nameCell);

  //     const emailCell = document.createElement("td");
  //     emailCell.textContent = student.email;
  //     row.appendChild(emailCell);

  //     const ageCell = document.createElement("td");
  //     ageCell.textContent = student.age;
  //     row.appendChild(ageCell);

  //     const mobileCell = document.createElement("td");
  //     mobileCell.textContent = student.mobile;
  //     row.appendChild(mobileCell);

  //     const branchCell = document.createElement("td");
  //     branchCell.textContent=student.branch;
  //     row.appendChild(branchCell);

  //     tbody.appendChild(row);
  //   });

  //   table.appendChild(tbody);
  //   tableDiv.appendChild(table);
  // }

  // filterbtnHR = ()=>{
  //   const cseStudents = this.state.studentDetails.filter(
  //     (element) => element.branch === "HR"
  //   );

  //   // Render the filtered data in the tableDiv
  //   let tableDiv = document.getElementById("tableDiv");
  //   tableDiv.innerHTML = ""; // Clear previous content

  //   // Create the table element
  //   const table = document.createElement("table");
  //   table.setAttribute("class","table")

  //   // Create the table header
  //   const thead = document.createElement("thead");
  //   const headerRow = document.createElement("tr");

  //   const headers = ["Sno.", "Name", "Email", "Age", "Mobile","Branch"];

  //   headers.forEach((headerText) => {
  //     const th = document.createElement("th");
  //     th.textContent = headerText;
  //     headerRow.appendChild(th);
  //   });

  //   thead.appendChild(headerRow);
  //   table.appendChild(thead);

  //   // Create and append table rows for each student
  //   const tbody = document.createElement("tbody");

  //   cseStudents.forEach((student, index) => {
  //     const row = document.createElement("tr");

  //     // Create and append cells for each student property
  //     const snoCell = document.createElement("td");
  //     snoCell.textContent = index + 1; // Add 1 to start numbering from 1
  //     row.appendChild(snoCell);

  //     const nameCell = document.createElement("td");
  //     nameCell.textContent = student.sname;
  //     row.appendChild(nameCell);

  //     const emailCell = document.createElement("td");
  //     emailCell.textContent = student.email;
  //     row.appendChild(emailCell);

  //     const ageCell = document.createElement("td");
  //     ageCell.textContent = student.age;
  //     row.appendChild(ageCell);

  //     const mobileCell = document.createElement("td");
  //     mobileCell.textContent = student.mobile;
  //     row.appendChild(mobileCell);

  //     const branchCell = document.createElement("td");
  //     branchCell.textContent=student.branch;
  //     row.appendChild(branchCell);

  //     tbody.appendChild(row);
  //   });

  //   table.appendChild(tbody);
  //   tableDiv.appendChild(table);
  // }

  // filterbtnAI = ()=>{
  //   const cseStudents = this.state.studentDetails.filter(
  //     (element) => element.branch === "AI"
  //   );

  //   // Render the filtered data in the tableDiv
  //   let tableDiv = document.getElementById("tableDiv");
  //   tableDiv.innerHTML = ""; // Clear previous content

  //   // Create the table element
  //   const table = document.createElement("table");
  //   table.setAttribute("class","table")

  //   // Create the table header
  //   const thead = document.createElement("thead");
  //   const headerRow = document.createElement("tr");

  //   const headers = ["Sno.", "Name", "Email", "Age", "Mobile","Branch"];

  //   headers.forEach((headerText) => {
  //     const th = document.createElement("th");
  //     th.textContent = headerText;
  //     headerRow.appendChild(th);
  //   });

  //   thead.appendChild(headerRow);
  //   table.appendChild(thead);

  //   // Create and append table rows for each student
  //   const tbody = document.createElement("tbody");

  //   cseStudents.forEach((student, index) => {
  //     const row = document.createElement("tr");

  //     // Create and append cells for each student property
  //     const snoCell = document.createElement("td");
  //     snoCell.textContent = index + 1; // Add 1 to start numbering from 1
  //     row.appendChild(snoCell);

  //     const nameCell = document.createElement("td");
  //     nameCell.textContent = student.sname;
  //     row.appendChild(nameCell);

  //     const emailCell = document.createElement("td");
  //     emailCell.textContent = student.email;
  //     row.appendChild(emailCell);

  //     const ageCell = document.createElement("td");
  //     ageCell.textContent = student.age;
  //     row.appendChild(ageCell);

  //     const mobileCell = document.createElement("td");
  //     mobileCell.textContent = student.mobile;
  //     row.appendChild(mobileCell);

  //     const branchCell = document.createElement("td");
  //     branchCell.textContent=student.branch;
  //     row.appendChild(branchCell);

  //     tbody.appendChild(row);
  //   });

  //   table.appendChild(tbody);
  //   tableDiv.appendChild(table);
  // }

  // filterbtn = (branch)=>{
  //   this.filterStudent(branch);
  // }

  filterStudent =(branch)=>{
    if (branch==="ALL") {
      var Students = this.state.studentDetails.filter((element) => element);
    }else{
      Students = this.state.studentDetails.filter((element) => element.branch === branch);
    }

    // const Students = this.state.studentDetails.filter((element) => element.branch === branch);

    let tableDiv = document.getElementById("tableDiv");
    tableDiv.innerHTML = "";

    const table = document.createElement("table");
    table.setAttribute("class","table")

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    const headers = ["S.No","Roll No", "Name", "Email", "Age", "Mobile","Branch","Operation"];

    headers.forEach((headerText) => {
      const th = document.createElement("th");
      th.textContent = headerText;
      headerRow.appendChild(th);
    });
    

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    tbody.setAttribute("class","tablebody")

    Students.forEach((student, index) => {
      const row = document.createElement("tr");

      const snoCell = document.createElement("td");
      snoCell.textContent = index + 1; 
      row.appendChild(snoCell);

      const rollnoCell = document.createElement("td");
      rollnoCell.textContent = student.rollNumber; 
      row.appendChild(rollnoCell);

      const nameCell = document.createElement("td");
      nameCell.textContent = student.sname;
      row.appendChild(nameCell);

      const emailCell = document.createElement("td");
      emailCell.textContent = student.email;
      row.appendChild(emailCell);

      const ageCell = document.createElement("td");
      ageCell.textContent = student.age;
      row.appendChild(ageCell);

      const mobileCell = document.createElement("td");
      mobileCell.textContent = student.mobile;
      row.appendChild(mobileCell);

      const branchCell = document.createElement("td");
      branchCell.textContent=student.branch;
      row.appendChild(branchCell);
      
      const operationCell = document.createElement('td');
      
      const button = document.createElement('button');
      button.innerHTML = 'Delete';
      button.className = 'btn btn-primary';
      button.addEventListener('click',() => this.deleteStudent(student.rollNumber));
      operationCell.appendChild(button);

      row.appendChild(operationCell)
      tbody.appendChild(row);
    }
    );

    table.appendChild(tbody);
    tableDiv.appendChild(table);
  }

  deleteStudent = (rollNumber) => {
    if (window.confirm('Are you sure!')) {
      const indexToDelete = this.state.studentDetails.findIndex(student => student.rollNumber === rollNumber);
  
      if (indexToDelete !== -1) {
        this.state.studentDetails.splice(indexToDelete, 1);
        this.setState({ studentDetails: [...this.state.studentDetails] });
      }
    }
  };
  render() {
    return (
      <div className="conatiner mt-5">
        <h2 className="text-center text-secondary mb-3 heading">
          Student Details
        </h2>
        <div className="row">
          <div className="col-md-6">
            <input
              type="text"
              id="name"
              className="form-control mt-2 mb-2"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="email"
              id="email"
              className="form-control mt-2 mb-2"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="number"
              id="rollNumber"
              className="form-control mt-2 mb-2"
              placeholder="Enter Your Roll Number"
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="number"
              id="age"
              className="form-control mt-2 mb-2"
              placeholder="Enter Your Age"
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="number"
              id="mobile"
              className="form-control mt-2 mb-2"
              placeholder="Enter Your Mobile Number"
              required
            />
          </div>
          <div className="col-md-6">
            <select
              name="branch"
              id="branch"
              className="form-control mt-2 mb-2"
            >
              <option>Select Branch</option>
              <option value="CSE">CSE</option>
              <option value="IT">IT</option>
              <option value="HR">HR</option>
              <option value="AI">AI</option>
              <option value="ML">ML</option>
            </select>
          </div>
        </div>
        <div className="inputFields mb-5">
          <div className="d-flex justify-content-between">
            <button onClick={this.addStudent} className="btn btn-primary">
              Add Student
            </button>
            <div
              className="btns d-flex justify-content-between"
              style={{ width: 350 }}
            >
              <button
                onClick={() => {
                  this.filterStudent("ALL");
                }}
                className="btn btn-primary"
              >
                ALL
              </button>
              <button
                onClick={() => {
                  this.filterStudent("CSE");
                }}
                className="btn btn-primary"
              >
                CSE
              </button>
              <button
                onClick={() => {
                  this.filterStudent("IT");
                }}
                className="btn btn-primary"
              >
                IT
              </button>
              <button
                onClick={() => {
                  this.filterStudent("HR");
                }}
                className="btn btn-primary"
              >
                HR
              </button>
              <button
                onClick={() => {
                  this.filterStudent("AI");
                }}
                className="btn btn-primary"
              >
                AI
              </button>
              <button
                onClick={() => {
                  this.filterStudent("ML");
                }}
                className="btn btn-primary"
              >
                ML
              </button>
            </div>
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
              {this.state.studentDetails.map((element, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{element.rollNumber}</td>
                  <td>{element.sname}</td>
                  <td>{element.email}</td>
                  <td>{element.age}</td>
                  <td>{element.mobile}</td>
                  <td>{element.branch}</td>
                  <td>
                    <button
                      className='btn btn-primary'
                      onClick={() => {
                        this.deleteStudent(index);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
