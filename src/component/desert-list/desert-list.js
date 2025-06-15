import React from 'react';
import ImageGallery from '../imageGallery';
import {getArticleList} from '../../service/articleService';


const DesertList = () => {

    return (
        <div>
            <ImageGallery getArticleMethod={getArticleList}/>
        </div>
    )
}

export default DesertList;