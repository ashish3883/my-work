// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Todos from './Components/Todos';

function App() {
  return (
    <>
    <NavBar title={"Tools"} home={'Home'} aboutUs={'About Us'} />
    <Todos/>
    </>
  );
}

export default App;
