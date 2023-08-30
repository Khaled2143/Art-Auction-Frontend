import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "../css/LogInPage.css";
import { Post } from '../utils/APICall';

const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username or Email is required'),
    password: Yup.string().required('Password is required'),
});

function LogInPage(props) {

    const location = useLocation();
    const navigate = useNavigate();

    const initialValues = {
        username: location?.state?.username || '',
        password: location?.state?.password || '',
    };

    const handleSubmit = (values) => {
        // Perform login submission
        Post('/login', values)
            .then(res => {
                console.log(res);
                console.log(res.data);
                props.handleLogin();
                navigate('/', {state : {
                    message: res.data.message,
                }})
            })
            .catch(err => {
                console.log(err);
                navigate('/login', {state : {
                    message : [err.message, "error-message"]
                }})
            });
            
        console.log("Login form submitted with values:", values);
    };

    return (
        <div className="LogIn">
            {location?.state?.message && <div className={location.state.message[1]}>{location.state.message[0]}</div>}
            <div className="login-container">
                <h1>Login</h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <Field type="text" name="username" placeholder="Username or Email" />
                        <ErrorMessage name="username" component="div" className="error" />
                        
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
