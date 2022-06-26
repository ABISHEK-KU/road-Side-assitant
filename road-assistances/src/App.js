import React from 'react';
import './App.css';
import { Route} from 'react-router-dom';
import User from './Components/User';
import NavBar from './Components/Navbar';
import Admin from './Components/Admin';
import Report from './Components/Report';

const App=(props)=>{
  return (
    <div className="App">
      <NavBar/>
      <h1 className='heading'>ABC Insurance</h1>
      <Route path='/user' component={User} exact={true}/>
      <Route path='/admin' component={Admin} exact={true}/>
      <Route path='/report' component={Report} exact={true}/>
    </div>
  );
}

export default App;
