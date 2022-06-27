import React, { useState, useEffect } from "react";
import '../Styles/Report.css'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup';

const Report = (props) => {
    const report = props.location.state
    const [policyNo, setpolicyNo] = useState('')
    const [phone, setPhone] = useState('')
    const [location, setLocation] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [data, setData] = useState([])

    if (localStorage.getItem('ReportData') === null) {
        localStorage.setItem('ReportData', JSON.stringify([]))
    }

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('ReportData')))
    }, [JSON.parse(localStorage.getItem('ReportData')).length])

    const ReportSchema = Yup.object().shape({
        policyNo: Yup.string()
            .required('PolicyNo Required')
            .min(17, 'Required 17 digit')
            .max(17, 'Required 17 digit'),
        phone: Yup.string()
            .required('PhoneNo required')
            .min(10, 'Required 10 digit')
            .max(10, 'Required 10 digit'),
        location: Yup.string()
            .required('Location Required'),
        image: Yup.mixed()
            .required('Image Required'),
        description: Yup.string()
            .required('Description Required')
    });

    const handleLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLocation(`${position.coords.latitude}-${position.coords.longitude}`)
        })
    }

    const handelPolicy = (e) => {
        setpolicyNo(e.target.value)
    }
    const handelImage = (e) => {
        setImage(e.target.value)
    }

    const handelDescription = (e) => {
        setDescription(e.target.value)
    }

    const handelphone = (e) => {
        setPhone(e.target.value)
    }

    const handelSubmit = (value) => {
        const reportData = {
            serviceId: Date.now(),
            service: report.service,
            phone: value.phone,
            policyNo: value.policyNo,
            location: [value.location.split('-').join(',')],
            image: value.image,
            description: value.description,
            status:'services Requested'
        }
        console.log(reportData)

        localStorage.setItem('ReportData', JSON.stringify([...data, reportData]))

        setpolicyNo('')
        setPhone('')
        setLocation('')
        setImage('')
        setDescription('')
    }

    return (
        <div>
            <h1>{report.service}</h1>
            <Formik
                initialValues={{
                    policyNo: policyNo,
                    phone: phone,
                    location: location,
                    image: image,
                    description: description,
                }}
                validateOnChange={false}
                validateOnBlur={false}
                validationSchema={ReportSchema}
                enableReinitialize
                onSubmit={values => {
                    handelSubmit(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className='policyNo'>
                            <div className='policyNo-cont'>
                                <Field name="policyNo" className='policyNo-Inputs' type='number' value={policyNo} onChange={handelPolicy} placeholder='Please Enter 17 Digit Policy Number without "/"' />
                                <span className="policyNo-count">{17 - policyNo.length}</span>
                            </div>
                        </div>
                        {errors.policyNo && touched.policyNo ? (
                            <p className="error">{errors.policyNo}</p>
                        ) : null}

                        <div className="phoneNumber">
                            <div className='phoneNumber-cont'>
                                <Field name="phone" type='number' value={phone} onChange={handelphone} className='phoneNumber-Input' placeholder='Please Enter Your Phone Number' />
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-phone-fill" viewBox="0 0 16 16">
                                    <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" />
                                </svg>
                            </div>
                        </div>
                        {errors.phone && touched.phone ? (
                            <p className="error">{errors.phone}</p>
                        ) : null}
                        <div className="locationData">
                            <div className='locationData-cont'>
                                <Field name="location" type='text' className='locationData-Input' disabled={true} placeholder='Click icon to get location' value={location} />
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16" onClick={handleLocation}>
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                </svg>
                            </div>
                        </div>
                        {errors.location && touched.location ? (
                            <p className="error">{errors.location}</p>
                        ) : null}


                        <div className="imageData">
                            <div className='imageData-cont'>
                                <Field name="image" type='file' capture='user' value={image} onChange={handelImage} accept='image/jpeg' className='imageData-Input' id='image' />
                                <label htmlFor="image">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-camera-fill" viewBox="0 0 16 16">
                                        <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                        <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                                    </svg>
                                </label>
                            </div>
                        </div>
                        {errors.image && touched.image ? (
                            <p className="error">{errors.image}</p>
                        ) : null}

                        <div className="problemDesData">
                            <div className='problemDesData-cont'>
                                <Field name="description" type='text' value={description} onChange={handelDescription} className='problemDesData-Input' placeholder='Please Enter Your Problem Description' />
                            </div>
                        </div>
                        {errors.description && touched.description ? (
                            <p className="error">{errors.description}</p>
                        ) : null}


                        <button type="submit" className='reportbtn'><h3>Report</h3></button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
export default Report