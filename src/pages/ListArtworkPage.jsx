import React, {useEffect} from 'react';
import { useNavigate } from 'react-router';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "../css/ListArtworkPage.css"; // Create this CSS file for styling
import { Post } from '../utils/APICall';

const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    startingPrice: Yup.number().required('Starting Price is required').min(0, 'Starting Price must be a positive number'),
    image: Yup.string().url('Invalid URL format').required('Image URL is required'),
});

function imageUploader(props){
    const {field, form} = props;

    const handleChange = async (e) => {
        const img = e.currentTarget.files[0];
        form.setFieldValue(field.name, img);
    };

    return (
        <input type="file" onChange={(e) => handleChange(e)} />
    );
}

function ListArtworkPage() {

    const navigate = useNavigate();

    useEffect(() => {
        document.title = "List Artwork | Art Market";

        Post('/check-auth', {})
            .then(res => {
                console.log(res);
                console.log(res.data);
                if (!res.data.authenticated) {
                    navigate('/login', {state : {
                        message : ["You must be logged in to list an artwork", "error-message"]
                    }}) 
                }   
            })
            .catch(err => {
                console.log(err);
            });

    }, [navigate]);


    const initialValues = {
        title: '',
        startingPrice: '',
        image: '',
    };

    const handleSubmit = (values) => {
        // Perform artwork listing submission
        Post('/artworks', values)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    
        console.log("Artwork listed with values:", values);
    };

    return (
        <div className="ListArtwork">
            <div className="list-artwork-container">
                <h1>List Artwork</h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <Field type="text" name="title" placeholder="Title" />
                        <ErrorMessage name="title" component="div" className="error" />
                        
                        <Field type="number" name="price" placeholder="Starting Price" />
                        <ErrorMessage name="startingPrice" component="div" className="error" />
                        
                        <Field name='image' component={imageUploader} />
                        <ErrorMessage name="image" component="div" className="error" />
                        
                        <button type="submit" className="button">List Artwork</button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default ListArtworkPage;