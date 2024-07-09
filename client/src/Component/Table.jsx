import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaPlusCircle } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const Table = ({ UpdateUser,DeleteUser }) => {
    const [data,setData] = useState([]);

    useEffect(()=>{
 async function FetchData() {
    try {
        const fetchUser = await axios.get('http://localhost:4000/api/get')
        const response = fetchUser.data
        // console.log(response)
        setData(response)
    } catch (error) {
        console.error('Error fetching data', error)
    }
 }
 FetchData();

    },[data])

  
  return (
    <>
            <div className="container mt-5">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-6">
                                <h2>Manage <b>Employees</b></h2>
                            </div>
                            <div className="col-sm-6">
                                <a href="#" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addEmployeeModal">
                                <FaPlusCircle /> <span>Add New Employee</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>                            
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Father</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.user?.map((elem) => (
                                <tr key={elem._id}>
                                    <td></td>
                                    <td>{elem.name}</td>
                                    <td>{elem.fathername}</td>
                                    <td>{elem.email}</td>
                                    <td>{elem.phone}</td>
                                    <td>
                                        <a href="#" className="edit cursor-pointer ms-3" data-bs-toggle="modal" data-bs-target="#editEmployeeModal" onClick={() => UpdateUser(elem._id)}>
                                            <MdEditSquare />
                                        </a>
                                        <a href="#" className="delete cursor-pointer" data-bs-toggle="modal" data-bs-target="#deleteEmployeeModal" onClick={() => DeleteUser(elem._id)}>
                                            <MdDelete />
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Table;