import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import UserTable from './Table/UserTable';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
    <UserTable/>
    <Toaster></Toaster>
    </>
  )
}

export default App