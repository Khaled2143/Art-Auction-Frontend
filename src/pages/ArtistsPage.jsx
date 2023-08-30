import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "../css/ArtistsPage.css";
import {Get, Post} from '../utils/APICall';
import TimerFormat from '../utils/TimerFormat';

const validationSchema = Yup.object().shape({
    bid_amount: Yup.number().required('Bid Amount is required').min(0, 'Bid Amount must be a positive number'),
});


function ArtistsPage() {
    const [artworkData, setArtworkData] = useState(null);
    const [remainingTime, setRemainingTime] = useState(null); // [days, hours, minutes, seconds
    const [available, setAvailable] = useState(null); 
    const params = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const artworkId = params.item;

    useEffect(() => {
        // Fetch artwork data from the API based on the artworkId
        Get(`/artworks/${artworkId}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
                setArtworkData(res.data);
                setRemainingTime(res.data.remaining_time)
                setAvailable(res.data.available)
            }) 
            .catch(err => {
                console.log(err);
            });

    }, [artworkId]);

    useEffect(() => {
        // Calculate the remaining time until the auction ends\
        if (remainingTime) {
            const interval = setInterval(() => {
                setRemainingTime(prev => prev - 1);

                if (remainingTime <= 0) {
                    setAvailable(false);
                    clearInterval(interval);
                }
            }, 1000); // Update the remaining time every second
            return () => clearInterval(interval);
        }
    }, [remainingTime]);

    if (!artworkData) {
        return <div>Loading...</div>; // Render a loading state while fetching data
    }

    const timer = TimerFormat(remainingTime);

    const initialValues = {
        bid_amount: '',
    };

    const handleSubmit = (values) => {
        // Perform artwork listing submission
        Post(`/artworks/${artworkId}/place-bid`, values)
            .then(res => {
                console.log(res);
                console.log(res.data);
                navigate(`/artworks/${artworkId}`, {state : {
                    message: res.data.message,
                }})
            })
            .catch(err => {
                console.log(err);
                navigate(`/artworks/${artworkId}`, {state : {
                    message : [err.message, "error-message"]
                }})
            });

        console.log(values);
    };

    return (
        <div className="Art">
            {location?.state?.message && <div className={location.state.message[1]}>{location.state.message[0]}</div>}
            <div className="ArtInfo">
                <br/><br/>
                <h1>
                    {artworkData.title}
                </h1> 
                <div className='image-div'>
                    <img src={artworkData.image} alt='' />
                </div>
            </div>
            <div className="Bidding">
                <h2>Current Price</h2>
                <h2 className='unbold'>{artworkData.current_bid} USD</h2>
                <br/>
                <h2>Timer</h2>
                <h2 className='unbold'> {timer} </h2>
                <br/>
                {available ? 
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        <Form>
                            <Field type="number" name="bid_amount" placeholder="Bid Amount" className='bid_amount' />
                            <ErrorMessage name="bid_amount" component="div" className="error" />
                            <br/>
                            <button type="submit" className="bid">Bid</button>
                        </Form>
                    </Formik>
                    :
                    <div>
                        <button disabled='true' className="bid">Sold</button>
                    </div>
                    }
            </div>
            <div className="ArtistInfo">
                <h1>Artist: {artworkData.artist_name}</h1>
                <br/>
                <div className="UserImage">
                    <strong>{artworkData.artist_name[0]}</strong>
                </div>
                <br/>
                <h2>Bio</h2>
                <h4 className='unbold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua.<br/> Ut enim ad minim veniam, quis nostrud exercitation ullamco<br/>  laboris 
                nisi ut aliquip ex</h4>
            </div>
        </div>
    );
}

export default ArtistsPage;