import { useEffect } from 'react';
import { json, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { useGlobalContex } from './components/authentication/Hook/ReactContex';
import PrivetRoute from './components/authentication/PrivetRoute/PrivetRoute';
import HireRed from './components/hireReq/HireRed';
import Banner from './components/home/Banner/Banner';
import Home from './components/home/Home/Home';
import PostForm from './components/profile/CreatePost/PostForm';
import Profile from './components/profile/Profile/Profile';
import Login from './components/share/Login/Login';
import Nav from './components/share/Nav/Nav';
import Signup from './components/share/Signup/Signup';

function App() {

  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Banner />}></Route>
        <Route path='/home' element={<PrivetRoute><Home></Home></PrivetRoute>}></Route>
        <Route path='/postForm' element={
          <PrivetRoute>
            <PostForm />
          </PrivetRoute>
        }></Route>
        <Route path='/profile' element={<PrivetRoute>
          <Profile />
        </PrivetRoute>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/hired' element={<PrivetRoute>
          <HireRed />
        </PrivetRoute>}></Route>
      </Routes>
    </div>
  );
}

export default App;
