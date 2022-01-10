import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Home from './Components/Home/Home/Home';
import Services from './Components/Home/Services/Services';
import { auth } from './Components/Authentication/Login/firebase.config';
import Login from './Components/Authentication/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import PrivateRoute from './Components/Authentication/PrivateRoute/PrivateRoute';
import Books from './Components/Dashboard/Books/Books';
import Service from './Components/Dashboard/Service/Service';
import AddReview from './Components/Dashboard/AddReview/AddReview';
import AddAdmin from './Components/Dashboard/AddAdmin/AddAdmin';
import BookingList from './Components/Dashboard/BookingList/BookingList';
import OrderList from './Components/Dashboard/OrderList/OrderList';
import ManageService from './Components/Dashboard/ManageService/ManageService';
import axios from 'axios';
export const userContext = createContext()

const App = () => {
  const [userLoggedIn, setUserLoggedIn] = useState({})
  const [isAdmin, setIsAdmin] = useState(false)
  useEffect(() => {
    const onChange = (currentUser) => {
      setUserLoggedIn(currentUser)

    }
    const unSub = onAuthStateChanged(auth, onChange)
    return unSub;
  }, [])
  useEffect(() => {
    if (userLoggedIn?.email) {
      axios.get(`https://afternoon-mesa-42742.herokuapp.com/isAdmin/${userLoggedIn?.email}`)
        .then(res => setIsAdmin(res.data))
        .catch(err =>{})
    }
  }, [userLoggedIn?.email])
  return (
    <userContext.Provider value={[userLoggedIn, setUserLoggedIn]}>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/services"
          element={
            <Services />
          }
        />
        <Route path="/dashboard/*" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute >
        }>
          <Route path="book/:id" element={<Books />} />
          <Route path="review" element={<AddReview />} />
          <Route path="bookingList" element={<BookingList />} />
              <Route path="orderList" element={
                isAdmin?
              <OrderList />:<p style={{ color:"red"}}>You Dont Have Permission</p>
              } />
              <Route path="addService" element={
                isAdmin?
              <Service />:<p style={{ color:"red"}}>You Dont Have Permission</p>
              } />
              <Route path="addAdmin" element={
                isAdmin?
              <AddAdmin />:<p style={{ color:"red"}}>You Dont Have Permission</p>
              } />
              <Route path="manageServices" element={
                isAdmin?
              <ManageService />:<p style={{ color:"red"}}>You Dont Have Permission</p>
              } />
              
        </Route>
      </Routes>
    </userContext.Provider>


  );
};

export default App;