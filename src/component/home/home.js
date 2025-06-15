import React from 'react';
import ImageGallery from '../imageGallery';
import {getAllArticleList} from '../../service/articleService';


import './home.css';

const Home = () => {

    return (
        <div>
            <h1>Home</h1>

            <ImageGallery getArticleMethod={getAllArticleList}/>
        </div>
    );

}

export default Home;