import React from 'react';
import ImageGallery from '../../imageGallery';
import {getArticleList} from '../../../service/articleService';


const MainCourseList = () => {

    return (
        <div>
            <ImageGallery getArticleMethod={getArticleList} theme='MAIN_COURSE'/>
        </div>
    )
}

export default MainCourseList;