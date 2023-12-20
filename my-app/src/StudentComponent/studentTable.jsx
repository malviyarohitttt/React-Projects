import React from 'react'

export default function studentTable({studentList,activeBranch,setStudentList}) {

const deleteStudent = (rollNumber) => {
    if (window.confirm('Are you sure!')) {
      const indexToDelete =studentList.findIndex(student => student.rollNumber === rollNumber);
      
      studentList.splice(indexToDelete, 1);
      setStudentList((prevStudentList) => [...prevStudentList]);
    }
  };
return(
    <>
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
      {studentList
        .filter((student, index) => {
          return activeBranch === "All" || student.branch === activeBranch;
        })
        .map((student, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{student.rollNumber}</td>
            <td>{student.sname}</td>
            <td>{student.email}</td>
            <td>{student.age}</td>
            <td>{student.mobile}</td>
            <td>{student.branch}</td>
            <td>
              <button className="btn btn-primary" onClick={() => {deleteStudent(student.rollNumber);}}>Delete</button>
            </td>
          </tr>
        ))}
    </tbody>
  </table>
</div>
</>
)
}
