import React, { Component } from "react";
import moment from "moment";

export default class toDoList extends Component {
  constructor() {
    let data = []
    super();
    this.state = {
      toDoWork: data
    };
  }
  addWork = () => {
    let workInput = document.querySelector("#dataInp");
    let work = workInput.value;
    // console.log(work.length);
    if(work.length<1){
      window.alert("Please Enter Work!")
    }
    else{
      const timestamp = moment().format("YYYY-MM-DD HH:mm");
      const newWork = { work, timestamp }; // Include the timestamp in the task object
      this.setState({toDoWork: [...this.state.toDoWork,newWork]});
      workInput.value = "";
    }
  };
  workDone = () => {
    window.alert("Called....");
  };
  workDelete = (index) => {
    if(window.confirm("Are you sure!")){
      this.state.toDoWork.splice(index,1);
      this.setState({toDoWork:[...this.state.toDoWork]});
    }
  };
  render() {
    return (
      <div className="container mt-5">
        <h1 className="text-center text-primary">To Do List</h1>
        <div className="inputDiv mb-5 d-flex">
          <input id="dataInp" type="text" className="form-control" placeholder="Enter Work To Do" style={{ height: 40 }}/>
          <button onClick={this.addWork} className="btn btn-primary" style={{ height: 40, width: 140, marginLeft: 10 }}> Add Work</button>
        </div>
        <div className="showData">
          <table className="table">
            <tr>
              <th>S.No</th>
              <th>Work To DO</th>
              <th>Time</th>
              <th>Operation</th>
            </tr>
            <tbody>
            {this.state.toDoWork.map((element,index) =>
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{element.work}</td>
                <td>{element.timestamp}</td>
                <td>
                  <button onClick={()=>{this.workDelete(index)}} className="btn btn-secondary">Delete</button>
                </td>
              </tr>
            )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
