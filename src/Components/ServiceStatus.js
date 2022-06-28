import React, { useState, useEffect } from "react";
import ProgressBar from 'react-dennis-progressbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const ServiceStatus = (props) => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    const [status, setStatus] = useState({})
    const [step, setStep] = useState(0)
    console.log(status, search)

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('ReportData')))
    }, [JSON.parse(localStorage.getItem('ReportData')).length])

    useEffect(() => {
        if (status) {
            if (status.status === "Services Requested") {
                setStep(1)
            } else if (status.status === "SendTeam") {
                setStep(2)
            } else if (status.status === "Completed") {
                setStep(3)
            }
        }
    }, [status])

    const handelSearch = () => {
        const filteredData = data.filter((e) => {
            return e.serviceId === search
        })
        filteredData.length > 0 && setStatus(...filteredData)
    }

    const searchData = (e) => {
        setSearch(Number(e.target.value))
    }



    return (
        <div>
            <div className="d-flex align-items-center justify-content-center">
                <div className="input-group mb-3 w-50">
                    <input type="text" className="form-control " onChange={searchData} placeholder="Please Enter Service Id for Tracking" aria-label="Please Enter Service Id for Tracking" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-secondary" onClick={() => { handelSearch() }} type="button" id="button-addon2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg></button>
                </div>
            </div>
            {
                status.status && (
                    <div className="mt-50">
                        <ProgressBar
                            stepNumber={step}
                            steps={[1, 2]}
                            bullets={true} />
                        <h1>{(status.status)}</h1>
                    </div>
                )
            }
        </div>
    )
}
export default ServiceStatus