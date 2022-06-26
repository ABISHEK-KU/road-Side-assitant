import React from "react";
import '../Styles/Report.css'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup';

const Report = (props) => {

    const SignupSchema = Yup.object().shape({
        policyNo1: Yup.number()
            .typeError('Please Enter Valid Policy Number')
            .integer()
            .required('PolicyNo Required'),
        policyNo2: Yup.number()
            .typeError('Please Enter Valid Policy Number')
            .integer()
            .required('PolicyNo Required'),
        policyNo3: Yup.number()
            .typeError('Please Enter Valid Policy Number')
            .integer()
            .required('PolicyNo Required'),
        policyNo4: Yup.number()
            .typeError('Please Enter Valid Policy Number')
            .integer()
            .required('PolicyNo Required'),
        location: Yup.string()
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
    });

    const handleLocation = () => {
        console.log('location')
    }


    return (
        <div>
            <Formik
                initialValues={{
                    policyNo1: '',
                    policyNo2: '',
                    policyNo3: '',
                    policyNo4: '',
                    location: '',
                    email: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className='policyNo'>
                            <div className='policyNo-cont'>
                                <Field name="policyNo1" className='policyNo1-Inputs' maxLength={3} minLength={3} />
                                <span>/</span>
                                <Field name="policyNo2" className='policyNo2-Inputs' maxLength={8} minLength={8} />
                                <span>/</span>
                                <Field name="policyNo3" className='policyNo3-Inputs' maxLength={3} minLength={3} />
                                <span>/</span>
                                <Field name="policyNo4" className='policyNo4-Inputs' maxLength={2} minLength={2} />
                            </div>
                        </div>
                        {(errors.policyNo1 && touched.policyNo1) || (errors.policyNo2 && touched.policyNo2) || (errors.policyNo3 && touched.policyNo3) || (errors.policyNo4 && touched.policyNo4) ? (
                            <p className="error">{errors.policyNo1 || errors.policyNo2 || errors.policyNo3 || errors.policyNo4}</p>
                        ) : null}

                        <div className="locationData">
                            <div className='locationData-cont'>
                                <Field name="location" type='text' className='locationData-Input' />
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16" onClick={handleLocation}>
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                </svg>
                            </div>
                        </div>
                        {errors.location && touched.location ? (
                            <p className="error">{errors.location}</p>
                        ) : null}

                        <div className="cameraData">
                            <div className='cameraData-cont'>
                                <Field name="camera" type='file' capture='user' accept='image/jpeg' className='cameraData-Input' />
                            </div>
                        </div>
                        {errors.location && touched.camera ? (
                            <p className="error">{errors.camera}</p>
                        ) : null}

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
export default Report