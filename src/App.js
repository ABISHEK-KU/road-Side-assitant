import React, { useEffect } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import User from './Components/User';
import NavBar from './Components/Navbar';
import Admin from './Components/Admin';
import Report from './Components/Report';

const App = (props) => {

  useEffect(() => {
    localStorage.setItem('policyDetails', JSON.stringify([
      {
        id: '1',
        policyNo: '1234/12345678/123/01',
        vehicleNo: 'TN-29-M-0001',
        policyHolderName: 'abc111',
        vehicleType: 'bike',
        fuel: 'petrol'
      }, {
        id: '2',
        policyNo: '1234/12345678/123/02',
        vehicleNo: 'TN-29-M-0002',
        policyHolderName: 'abc222',
        vehicleType: 'car',
        fuel: 'petrol'
      }, {
        id: '3',
        policyNo: '1234/12345678/123/03',
        vehicleNo: 'TN-29-M-0003',
        policyHolderName: 'abc333',
        vehicleType: 'car',
        fuel: 'diesel'
      }, {
        id: '4',
        policyNo: '1234/12345678/123/04',
        vehicleNo: 'TN-29-M-0004',
        policyHolderName: 'abc444',
        vehicleType: 'bike',
        fuel: 'petrol'
      }, {
        id: '5',
        policyNo: '1234/12345678/123/05',
        vehicleNo: 'TN-29-M-0005',
        policyHolderName: 'abc555',
        vehicleType: 'gccv>3000',
        fuel: 'diesel'
      }, {
        id: '6',
        policyNo: '1234/12345678/123/06',
        vehicleNo: 'TN-29-M-0006',
        policyHolderName: 'abc666',
        vehicleType: 'ggcv<3000',
        fuel: 'diesel'
      }, {
        id: '7',
        policyNo: '1234/12345678/123/07',
        vehicleNo: 'TN-29-M-0007',
        policyHolderName: 'abc777',
        vehicleType: 'bike',
        fuel: 'petrol'
      }, {
        id: '8',
        policyNo: '1234/12345678/123/08',
        vehicleNo: 'TN-29-M-0008',
        policyHolderName: 'abc888',
        vehicleType: 'ggcv<3000',
        fuel: 'diesel'
      }, {
        id: '9',
        policyNo: '1234/12345678/123/09',
        vehicleNo: 'TN-29-M-0009',
        policyHolderName: 'abc999',
        vehicleType: 'car',
        fuel: 'diesel'
      }, {
        id: '10',
        policyNo: '1234/12345678/123/10',
        vehicleNo: 'TN-29-M-0010',
        policyHolderName: 'abc1000',
        vehicleType: 'car',
        fuel: 'petrol'
      }
    ]))
  }, [])

  return (
    <div className="App">
      <NavBar />
      <h1 className='heading'>ABC Insurance</h1>
      <Route path='/user' component={User} exact={true} />
      <Route path='/admin' component={Admin} exact={true} />
      <Route path='/report' component={Report} exact={true} />
    </div>
  );
}

export default App;
