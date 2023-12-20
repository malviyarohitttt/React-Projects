// Student Details Project using functional Component(By divideing into components)

import { useState } from "react"
import StudenTable from "./studentTable.jsx";
import StudentForm from "./studentForm.jsx";
import Data from "../funtionalComponent/data.jsx";
export default function StudentList(){

let [activeBranch,setActiveBranch] = useState("All");
let [studentList,setStudentList] = useState(Data);

return (
  <>
    <StudentForm studentList={studentList} setStudentList={setStudentList} activeBranch={activeBranch} setActiveBranch={setActiveBranch}/>
    <StudenTable studentList={studentList} setStudentList={setStudentList} activeBranch={activeBranch} setActiveBranch={setActiveBranch} />
  </>
  );
}
