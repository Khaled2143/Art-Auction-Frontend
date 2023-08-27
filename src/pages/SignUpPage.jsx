import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "../css/SignUpPage.css";
import { Post } from '../utils/APICall';
import {useNavigate, useLocation} from 'react-router-dom';

const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    phone_number: Yup.string().required('Phone Number is required'),
});

function SignUpPage() {
    const navigate = useNavigate();
    const location = useLocation(); 

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone_number: '',
    };

    const handleSubmit = (values) => {
 
        // Perform form submission
        Post('/add-user', values)
            .then(res => {
                console.log(res);
                console.log(res.data);
                navigate('/login', {state : {
                    message : [res.data.message, "success"],
                    username : values.username,
                    password : values.password
                }})
            })
            .catch(err => {
                console.log(err, "error");
                console.log(err.response, "error response");
                navigate('/signup', {state : {
                    message : [err.response.data.message, "error-message"]
                }})
            });

        console.log("Form submitted with values:", values);
    };

    return (
        <div className="SignUp">
            {location?.state?.message && <div className={location.state.message[1]}>{location.state.message[0]}</div>}
            <div className="signup-container">
                <h1>Sign Up</h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form className='signup-form'>
                        <Field type="text" name="username" placeholder="Username" />
                        <ErrorMessage name="username" component="div" className="error" />
                        
                        <Field type="email" name="email" placeholder="Email" />
                        <ErrorMessage name="email" component="div" className="error" />
                        
                        <Field type="password" name="password" placeholder="Password" />
                        <ErrorMessage name="password" component="div" className="error" />
                        
                        <Field type="password" name="confirmPassword" placeholder="Confirm Password" />
                        <ErrorMessage name="confirmPassword" component="div" className="error" />
                        
                        <Field type="text" name="phone_number" placeholder="Phone Number" />
                        <ErrorMessage name="phone_number" component="div" className="error" />
                        
                        <button type="submit">Sign Up</button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default SignUpPage;
