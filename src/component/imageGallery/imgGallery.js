import React, {useEffect, useState} from 'react';
import Pagination from '../pagination';
import FullWidthCenter from '../fullWidthCenter';
import {getArticleList} from '../../service/articleService';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setArticle } from '../../utils/articleSlice';

import './imageGallery.css';

const INIT_PAGING = {pageNumber: 0, pageSize: 8, totalElements: 1, totalPages: 1,
    first: true, hasNext: false, hasPrevious: false, last: false };

const ImageGallery = ({theme='DESERT'}) => {

    const dispatch = useDispatch();
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
            setPagination({pageNumber, pageSize, totalElements, totalPages,first,  hasNext,  hasPrevious,  last});
        }
    }

    const updatePage = (page) => {
        getArticleList(theme='DESSERT', page).then(res => updateArticleList(res));
    }

    const getImages = () =>  {
        if(images && images.length > 0) {
            return images.map((img, i) => {
                const imgSrc = img.srcImg ? img.srcImg : '/img/cake.png';

                return (<Link to={`/article/${img.id}`} key={i}>
                   <div className="gallery-item" key={i} onClick={() => dispatch(setArticle(img)) }>
                     <img src={imgSrc} alt="img should be here" />
                     <div className="description">
                         <h1>{img.title}</h1>
                         <p>{img.description}</p>
                     </div>
                   </div>
               </Link> )})
        }
    }

    const getPagination = () => {
        if(pagInfo && pagInfo.totalPages > 1) {
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