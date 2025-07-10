import React from 'react';
import ImageGallery from '../imageGallery';
import {getAllArticleList} from '../../service/articleService';

const HOME_TITLE = "What to cook today... ?";

const Home = () => {

    return (
        <div>
            <h1>{HOME_TITLE}</h1>
            <ImageGallery getArticleMethod={getAllArticleList}/>
        </div>
    );

}

export default Home;