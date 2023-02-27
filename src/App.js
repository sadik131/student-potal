import { Route, Routes } from 'react-router-dom';
import './App.css';
import PrivetRoute from './components/authentication/PrivetRoute/PrivetRoute';
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
      {/* <PostForm></PostForm> */}
      {/* <Profile></Profile> */}
    
      <Routes>
        <Route path='/' element={<Banner />}></Route>
        <Route path='/home' element={<PrivetRoute><Home></Home></PrivetRoute>}></Route>
        <Route path='/postForm' element={<PostForm />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
