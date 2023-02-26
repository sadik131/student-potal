import './App.css';
import Banner from './components/home/Banner/Banner';
import Login from './components/share/Login/Login';
import Nav from './components/share/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Banner></Banner>
      <Login></Login>
    </div>
  );
}

export default App;
