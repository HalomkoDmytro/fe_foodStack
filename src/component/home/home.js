import React, {useState} from 'react';
import ImageGallery from '../imageGallery';
import {getAllArticleList} from '../../service/articleService';


import './home.css';

const Home = () => {

    return (
        <div>

        <div className="home">
            <h1>Home</h1>

            <ImageGallery getArticleMethod={getAllArticleList}/>
        </div>
        </div>
    );

}

export default Home;