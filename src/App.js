import React, { useEffect } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import User from './Components/User';
import NavBar from './Components/Navbar';
import Admin from './Components/Admin';
import Report from './Components/Report';
import Location from './Components/Location';
import Image from './Components/Image';
import ServiceStatus from './Components/ServiceStatus';

const App = (props) => {

  useEffect(() => {
    localStorage.setItem('ReportData', JSON.stringify([
      {
        "serviceId": 1656422622552,
        "service": "Flat Tyer",
        "phone": "9042578425",
        "policyNo": "1234/12345678/123/09",
        "location": [
          "11.6902,78.2987"
        ],
        "image": "C:\\fakepath\\image_processing20210505-21702-10m6eww.jpg",
        "description": "tyer blast",
        "status": "SendTeam",
        "customerId": "9",
        "vehicleNo": "TN-29-M-0009",
        "policyHolderName": "abc999",
        "vehicleType": "car",
        "fuel": "diesel"
      },
      {
        "serviceId": 1656422330110,
        "service": "Accident",
        "phone": "9042578425",
        "policyNo": "1234/12345678/123/04",
        "location": [
          "11.6902,78.2987"
        ],
        "image": "C:\\fakepath\\image_processing20210505-21702-10m6eww.jpg",
        "description": "damage rear glass",
        "status": "Services Requested",
        "customerId": "4",
        "vehicleNo": "TN-29-M-0004",
        "policyHolderName": "abc444",
        "vehicleType": "bike",
        "fuel": "petrol"
      }
    ]))

    localStorage.setItem('policyDetails', JSON.stringify([
      {
        customerId: '1',
        policyNo: '1234/12345678/123/01',
        vehicleNo: 'TN-29-M-0001',
        policyHolderName: 'abc111',
        vehicleType: 'bike',
        fuel: 'petrol'
      }, {
        customerId: '2',
        policyNo: '1234/12345678/123/02',
        vehicleNo: 'TN-29-M-0002',
        policyHolderName: 'abc222',
        vehicleType: 'car',
        fuel: 'petrol'
      }, {
        customerId: '3',
        policyNo: '1234/12345678/123/03',
        vehicleNo: 'TN-29-M-0003',
        policyHolderName: 'abc333',
        vehicleType: 'car',
        fuel: 'diesel'
      }, {
        customerId: '4',
        policyNo: '1234/12345678/123/04',
        vehicleNo: 'TN-29-M-0004',
        policyHolderName: 'abc444',
        vehicleType: 'bike',
        fuel: 'petrol'
      }, {
        customerId: '5',
        policyNo: '1234/12345678/123/05',
        vehicleNo: 'TN-29-M-0005',
        policyHolderName: 'abc555',
        vehicleType: 'gccv>3000',
        fuel: 'diesel'
      }, {
        customerId: '6',
        policyNo: '1234/12345678/123/06',
        vehicleNo: 'TN-29-M-0006',
        policyHolderName: 'abc666',
        vehicleType: 'ggcv<3000',
        fuel: 'diesel'
      }, {
        customerId: '7',
        policyNo: '1234/12345678/123/07',
        vehicleNo: 'TN-29-M-0007',
        policyHolderName: 'abc777',
        vehicleType: 'bike',
        fuel: 'petrol'
      }, {
        customerId: '8',
        policyNo: '1234/12345678/123/08',
        vehicleNo: 'TN-29-M-0008',
        policyHolderName: 'abc888',
        vehicleType: 'ggcv<3000',
        fuel: 'diesel'
      }, {
        customerId: '9',
        policyNo: '1234/12345678/123/09',
        vehicleNo: 'TN-29-M-0009',
        policyHolderName: 'abc999',
        vehicleType: 'car',
        fuel: 'diesel'
      }, {
        customerId: '10',
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
      <Route path='/location' component={Location} exact={true} />
      <Route path='/image' component={Image} exact={true} />
      <Route path='/status' component={ServiceStatus} exact={true} />
    </div>
  );
}

export default App;
