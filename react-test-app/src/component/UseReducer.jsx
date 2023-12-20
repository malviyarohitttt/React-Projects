import React, { useReducer, useState } from 'react'
// import Data from './Data'

function UseReducer() {
    const deleteData = ()=>{
        window.alert("Clicked....")
    }
    let data = [
        {
            id: 100,
            sname: "Rohit",
            phone: 9669264151,
        },
        {
            id: 101,
            sname: "Mohit",
            phone: 8669264161,
        },
        {
            id: 102,
            sname: "Vishal",
            phone: 7669264171,
        },
        {
            id: 103,
            sname: "Rahul",
            phone: 6669264181,
        },
        {
            id: 104,
            sname: "Devansh",
            phone: 7669264191,
        }
    ]

    const [Data,setData] = useState(data)

  return <>
  <center>

        <label htmlFor="Id">Id</label><br />
        <input type="number" name="Id" id="Id" /><br/><br />

        <label htmlFor="name">Name</label><br />
        <input type="text" name="name" id="name" /><br/><br />

        <label htmlFor="phone">Phone</label><br />
        <input type="number" name="phone" id="phone" /><br/><br />

        <button>Add</button>

    <table >
        <thead>
            <tr>
                <th>S.No</th>
                <th>ID</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
        {Data.map((data,index)=> 
        <tr key={index}>
            <td>{index+1}</td>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.phone}</td>
            <td><button onClick={deleteData}>Delete</button></td>
        </tr>)}

        </tbody>
    </table>
    </center>
  </>
}

export default UseReducer
