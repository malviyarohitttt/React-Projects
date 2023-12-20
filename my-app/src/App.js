import React from 'react'

import CounterCom from './ClassComponent/counterCom'
import ToDoList from './ClassComponent/toDoList'
import StudentDetails1 from './ClassComponent/studentDetails-1'
import StudentDetails from './funtionalComponent/studentDetails.jsx'
import StudentRecord from './StudentComponent/studentRecord'

export default function App() {
  return (
    <div className='container'>
      {/* <CounterCom/>
      <ToDoList/>
      <StudentDetails1/>
      <StudentDetails/> */}
      <StudentRecord/>
    </div>
  )
}