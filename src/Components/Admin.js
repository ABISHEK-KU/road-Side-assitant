import React, { useState, useEffect } from "react";
import '../Styles/Admin.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const Admin = (props) => {
    const [data, setData] = useState([])
    const [service, setService] = useState('')
    const [status,setStatus]=useState('')
    const serviceList = [{ service: 'Accident', img: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/accident-1642856-1393941.png' },
    { service: 'Towing', img: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/towing-car-1614699-1369388.png' },
    { service: 'Fuel Delivery', img: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/fuel-49-189422.png' },
    { service: 'Flat Tyer', img: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/flat-tire-1544098-1307304.png' },
    { service: 'Jump Start', img: 'https://eazyservices.in/frontAssets/assets/images/jumpstart.png' },
    { service: 'Battery Replacement', img: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/car-battery-1614725-1369416.png' },
    { service: 'Other Mechanic Services', img: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/mechanic-2299525-1929646.png' }]

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('ReportData')))
    }, [JSON.parse(localStorage.getItem('ReportData')).length])


    const filterData = data.filter((e) => {
        return e.service.includes(service)
    }).reverse()

    console.log(filterData)

    const handelChange = (e) => {
        setService(e.target.value)
    }

    const handelImage = (src) => {
        props.history.push({ pathname: '/image', state: src })
    }

    const handelLocate = (location) => {
        props.history.push({ pathname: '/location', state: location })
    }

    const handelStatus=(e)=>{
        setStatus(e.target.value)
    }

    const handelUpdateStaus=(e)=>{
        const updatedData=data.map((ele)=>{
            if(ele.serviceId===e.serviceId){
                return {...ele,status:status}
            }else{
                return ele
            }
        })
        localStorage.setItem('ReportData', JSON.stringify(updatedData))
        setStatus('')
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
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">ServiceId</th>
                            <th scope="col">Policy No</th>
                            <th scope="col">Customer Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Service Status</th>
                            <th scope="col">Service</th>
                            <th scope="col">Locate</th>
                            <th scope="col">View Photo</th>
                        </tr>
                    </thead>
                    <tbody>

                        {filterData.map((e, i) => {
                            return (
                                <tr key={i}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{e.serviceId}</td>
                                    <td>{e.policyNo}</td>
                                    <td>{e.policyHolderName}</td>
                                    <td>{e.phone}</td>
                                    <td>
                                        <div className="input-group mb-3">
                                            <select className="form-select" aria-label="Default select example" defaultValue={e.status} onChange={handelStatus}>
                                                <option value=''>SELECT OPTION</option>
                                                <option value="services Requested">Requested</option>
                                                <option value="SendTeam">Send Team</option>
                                                <option value="Completed">service Completed</option>
                                            </select>
                                            <button className="btn btn-outline-secondary" type="button" id="button-addon1"onClick={()=>{handelUpdateStaus(e)}}>Update</button>
                                        </div></td>
                                    <td>{e.service}</td>
                                    <td><button className="btn btn-success" onClick={() => { handelLocate(e.location) }}>Locate</button></td>
                                    <td><button className="btn btn-warning" onClick={() => { handelImage(e.image) }}>View Image</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Admin