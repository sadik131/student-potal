import { Route, Routes } from 'react-router-dom';
import './App.css';
import PrivetRoute from './components/authentication/PrivetRoute/PrivetRoute';
import Banner from './components/home/Banner/Banner';
import Home from './components/home/Home/Home';
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
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
      {/* <Banner></Banner> */}
      {/* <Login></Login> */}
      {/* <Signup></Signup> */}
    </div>
  );
}

export default App;
