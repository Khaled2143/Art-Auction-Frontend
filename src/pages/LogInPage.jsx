import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "../css/LogInPage.css";
import { Post } from '../utils/APICall';

const validationSchema = Yup.object().shape({
    usernameOrEmail: Yup.string().required('Username or Email is required'),
    password: Yup.string().required('Password is required'),
});

function LogInPage() {
    const initialValues = {
        usernameOrEmail: '',
        password: '',
    };

    const handleSubmit = (values) => {
        // Perform login submission
        Post('/login', values)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
            
        console.log("Login form submitted with values:", values);
    };

    return (
        <div className="LogIn">
            <div className="login-container">
                <h1>Login</h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <Field type="text" name="usernameOrEmail" placeholder="Username or Email" />
                        <ErrorMessage name="usernameOrEmail" component="div" className="error" />
                        
                        <Field type="password" name="password" placeholder="Password" />
                        <ErrorMessage name="password" component="div" className="error" />
                        
                        <button type="submit" className="button">Login</button>
                    </Form>
                </Formik>
                <Link to="/signup">Don't have an account? Sign up now!</Link>
            </div>
        </div>
    );
}

export default LogInPage;
