import React from 'react';
import './App.css';
import { Route} from 'react-router-dom';
import User from './Components/User';
import NavBar from './Components/Navbar';
import Admin from './Components/Admin';

const App=(propds)=>{
  return (
    <div className="App">
      <NavBar/>
      <Route path='/user' component={User} exact={true}/>
      <Route path='/admin' component={Admin} exact={true}/>
    </div>
  );
}

export default App;
