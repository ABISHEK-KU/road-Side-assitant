import React, { useState, useEffect } from "react";
import '../Styles/Admin.css'

const Admin = (props) => {
    const [data, setData] = useState([])
    const [service, setService] = useState('')
    const [policyDetails,setpolicyDetails]=useState([])
    const [serviceDetails,setServiceDetails]=useState([])
    const serviceList = [{ service: 'Accident', img: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/accident-1642856-1393941.png' },
    { service: 'Towing', img: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/towing-car-1614699-1369388.png' },
    { service: 'Fuel Delivery', img: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/fuel-49-189422.png' },
    { service: 'Flat Tyer', img: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/flat-tire-1544098-1307304.png' },
    { service: 'Jump Start', img: 'https://eazyservices.in/frontAssets/assets/images/jumpstart.png' },
    { service: 'Battery Replacement', img: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/car-battery-1614725-1369416.png' },
    { service: 'Other Mechanic Services', img: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/mechanic-2299525-1929646.png' }]

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('ReportData')))
        setpolicyDetails(JSON.parse(localStorage.getItem('policyDetails')))
    }, [JSON.parse(localStorage.getItem('ReportData')).length])

    const policyDataSeparator=()=>{
        policyDetails.map((e)=>{
            return 
        })
    }
    const filterData = data.filter((e) => {
        return e.service.includes(service)
    })

    const handelChange = (e) => {
        setService(e.target.value)
    }
    return (
        <div>
            <select onChange={handelChange}>
                <option value={''}>Select Service</option>
                {serviceList.map((e, i) => {
                    return <option key={i} value={e.service}>{e.service}</option>
                })}
            </select>
            <div>
                <table>
                    <tr>
                        <th>S.No</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>PolicyNo</th>
                        <th>ServiceFor</th>
                    </tr>
                </table>
                {filterData.map((e, i) => {
                    return (
                        <h1>data</h1>
                    )
                })}
            </div>
        </div>
    )
}
export default Admin