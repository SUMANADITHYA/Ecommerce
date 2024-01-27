import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import LoginPage from './components/login/LoginPage';
import HomePage from './components/home/Homepage';
import SignUp from './components/SignUp/SignUp';
// import ProfilePage from './components/profile/ProfilePage';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Login' element={<LoginPage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        {/* <Route path='/profile' element={<ProfilePage/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
