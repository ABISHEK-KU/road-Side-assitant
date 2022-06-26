import React from 'react';
import '../Styles/User.css';

const User = (props) => {
    const service = [{ service: 'Accident', img: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/accident-1642856-1393941.png' },
    { service: 'Towing', img: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/towing-car-1614699-1369388.png' },
    { service: 'Fuel Delivery', img: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/fuel-49-189422.png' },
    { service: 'Flat Tyer', img: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/flat-tire-1544098-1307304.png' },
    { service: 'Jump Start', img: 'https://eazyservices.in/frontAssets/assets/images/jumpstart.png' },
    { service: 'Battery Replacement', img: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/car-battery-1614725-1369416.png' },
    { service: 'Other Mechanic Services', img: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/mechanic-2299525-1929646.png' }]

    const handelService=(service)=>{

        props.history.push('/report')
    }
    
    return (
        <div>
            <div className="service-container">
                {service.map((e, i) => {
                    return (
                        <div key={i} className='service' onClick={()=>{handelService(e.service)}}>
                            <img src={e.img} alt={e.service} />
                            <h5>{e.service}</h5>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
export default User

