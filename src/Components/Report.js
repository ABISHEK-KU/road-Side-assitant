import React, { useState } from "react";
import '../Styles/Report.css'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup';

const Report = (props) => {
    const [policyNo, setpolicyNo] = useState('')
    const [location, setLocation] = useState([])
    const [image, setImage] = useState('')
    const [description,setDescription]=useState('')

    console.log(location, image,)

    const ReportSchema = Yup.object().shape({
        policyNo: Yup.number()
            .typeError('Please Enter Valid Policy Number')
            .required('PolicyNo Required')
            .min,
        location: Yup.string()
            .required('Required'),
        image: Yup.mixed()
            .required('Required'),
        description: Yup.string()
        .required('Required')
    });

    const handleLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLocation([position.coords.latitude, position.coords.longitude])
            console.log(position.coords.latitude, position.coords.longitude)
        })
    }

    const handelPolicy = (e) => {
        setpolicyNo(e.target.value)
    }
    const handelImage = (e) => {
        setImage(e.target.value)
    }

    const handelDescription=(e)=>{
        setDescription(e.target.value)
    }

    return (
        <div>
            <Formik
                initialValues={{
                    policyNo: '',
                    location: '',
                    image: '',
                    description:''
                }}
                validationSchema={ReportSchema}
                onSubmit={values => {
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className='policyNo'>
                            <div className='policyNo-cont'>
                                <Field name="policyNo" className='policyNo-Inputs' type='text' value={policyNo} onChange={handelPolicy} maxLength={17} minLength={17} placeholder='Please Enter 17 Digit Policy Number without "/"' />
                                <span className="policyNo-count">{17 - policyNo.length}</span>
                            </div>
                        </div>
                        {errors.policyNo && touched.policyNo ? (
                            <p className="error">{errors.policyNo}</p>
                        ) : null}

                        <div className="locationData">
                            <div className='locationData-cont'>
                                <Field name="location" type='text' className='locationData-Input' disabled={true} placeholder='Click icon to get location' value={[...location]} />
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