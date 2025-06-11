import React, {useEffect, useState} from 'react';
import Pagination from '../pagination';
import FullWidthCenter from '../fullWidthCenter';
import {getArticleList} from '../../service/articleService';
import { Link } from "react-router-dom";

import './imageGallery.css';

const INIT_PAGING = {pageNumber: 0, pageSize: 8, totalElements: 1, totalPages: 1,
    first: true, hasNext: false, hasPrevious: false, last: false };

const ImageGallery = ({theme='DESERT'}) => {

    const [images, setImages] = useState();
    const [pagInfo, setPagination] = useState(INIT_PAGING)

    useEffect(() => {
        getArticleList().then(res => updateArticleList(res));
    }, []);

    const updateArticleList = (res) => {
        if(res){
            if(res.content) {
                setImages(res.content);
            };
        const {pageNumber, pageSize, totalElements, totalPages, first,  hasNext,  hasPrevious,  last} = res;
            console.log(res)
            setPagination({pageNumber, pageSize, totalElements, totalPages,first,  hasNext,  hasPrevious,  last});
        }
    }

    const updatePage = (page) => {
        getArticleList(theme='DESSERT', page).then(res => updateArticleList(res));
    }

    const getImages = () =>  {
        if(images && images.length > 0) {
            return images.map((img, i) => (
                <Link to={`/article`}>
                   <div className="gallery-item" key={i} onClick={() => console.log("IMG", img) }>
                     <img src={img.srcImg} alt="" />
                     <div className="description">
                         <h1>{img.title}</h1>
                         <p>{img.description}</p>
                     </div>
                   </div>
               </Link> ))
        }
    }

    const getPagination = () => {
        if(pagInfo && pagInfo.totalPages > 0) {
            return <Pagination first={pagInfo.first} last={pagInfo.last}  totalPages={pagInfo.totalPages}
            pageNumber={pagInfo.pageNumber} updatePage={(e) => updatePage(e)}/>
        }
    }

    return (
        <div>
            <div className="gallery">
                {getImages()}
            </div>
            <FullWidthCenter>
                {getPagination()}
            </FullWidthCenter>
        </div>
    )
}

export default ImageGallery;