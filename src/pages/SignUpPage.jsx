import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "../css/SignUpPage.css";
import Post from '../utils/Post';
import {useNavigate} from 'react-router-dom';

const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    phoneNumber: Yup.string().required('Phone Number is required'),
});

function SignUpPage() {
    const navigate = useNavigate()

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
    };

    const handleSubmit = (values) => {

        // Perform form submission
        Post('/users', values)
            .then(res => {
                console.log(res);
                console.log(res.data);
                navigate('/')
            })
            .catch(err => {
                console.log(err);
            });

        console.log("Form submitted with values:", values);
    };

    return (
        <div className="SignUp">
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
                        
                        <Field type="text" name="phoneNumber" placeholder="Phone Number" />
                        <ErrorMessage name="phoneNumber" component="div" className="error" />
                        
                        <button type="submit">Sign Up</button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default SignUpPage;
