import React, { useState } from 'react'
import Table from '../Component/Table'
import AddUser from '../Component/AddUser'
import UpdatedUser from '../Component/UpdateUser'
import DeleteUserComponent from '../Component/DeleteUserComponent' 
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const UserTable = () => {
  const [value,setValue] = useState({
    name:'',
    fathername:'',
    email:'',
    phone:''
});

const [updateId,setUpdateId] = useState('');
const [deleteId,setDeleteId] = useState('');


const handleChange = (e) =>{
  setValue({
      ...value,
      [e.target.name]: e.target.value
  });
};

const handleSubmit = async(e) => {
  e.preventDefault();
  try {
     const updateUser = await axios.put(`http://localhost:4000/api/update/${updateId}`, value);
     const response = updateUser.data;
     if(response.success){
        toast.success(response.message);
     }
  } catch (error) {
    console.error('Error updating user:', error);
    toast.error('Failed to update user. Please try again.');

  }
};
 
const handleUpdateUser = (id) => {
      setUpdateId(id)
};

const handleDeleteUser = async () => {
  if (!deleteId) {
    toast.error('No user selected for deletion.');
    return;
  }

  try {
    console.log('Attempting to delete user with ID:', deleteId); // Debugging log
    const deleteuser = await axios.delete(`http://localhost:4000/api/delete/${deleteId}`);
    const response = deleteuser.data;
    if (response.success) {
      toast.success(response.message);
      setDeleteId(''); // Reset deleteId after successful deletion
    }
  } catch (error) {
    console.error('Error deleting user:', error);
    toast.error('Failed to delete user. Please try again.');
  }
};

const handleDelete = (id) => {
  setDeleteId(id);
};

  return (
    <>
    <Table UpdateUser={handleUpdateUser} DeleteUser={handleDeleteUser}></Table>
    <AddUser></AddUser>
    <UpdatedUser value={value} handleChange={handleChange} handleSubmit={handleSubmit} />
    <DeleteUserComponent handleDelete={handleDelete} />
    </>
  )
};



export default UserTable;

