import React, {useState} from 'react';
import ImageGallery from '../imageGallery';
import Progress from '../progress';


import './home.css';

const Home = () => {

    return (
        <div>

        <div className="home">
            <h1>Home</h1>
            <Progress/>
{/*             <ImageGallery/> */}
        </div>
        </div>
    );

}

export default Home;