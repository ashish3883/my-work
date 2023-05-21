// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Todos from './Components/Todos';
import Form from './Components/Form'
import Textarea from './Components/TextForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNavBar from './Components/SideNavBar';
import { useState } from 'react';

function App() {
  const [component, setComponent] = useState('Todos');
  const handleClick = (event) => {
    setComponent(event);
  }
  const getComponent = (componentName) => {
    if(componentName  == 'Todos')
    return <Todos/>

    if(componentName  == 'TextUtils')
    return <Textarea/>

    if(componentName  == 'Form')
    return <Form/>
  }

  return (
    <>
    <div className="container">
      <NavBar title={"Tools"} home={'Home'} aboutUs={'About Us'} />
      <div className="container" style={{display:'flex', padding:'0px', margin:'0px' }}>
        <div className="container col">
        <SideNavBar handleClick={handleClick} />
        </div>
        <div className="container">
          {
          getComponent(component)
          }
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
