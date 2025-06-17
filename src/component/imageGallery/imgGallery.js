import React, {useEffect, useState} from 'react';
import Pagination from '../pagination';
import FullWidthCenter from '../fullWidthCenter';
import {getArticleList} from '../../service/articleService';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Progress from '../progress';


import './imageGallery.css';

const INIT_PAGING = {pageNumber: 0, pageSize: 8, totalElements: 1, totalPages: 1,
    first: true, hasNext: false, hasPrevious: false, last: false };

const ImageGallery = ({theme='DESSERT', getArticleMethod}) => {

    const dispatch = useDispatch();
    const [images, setImages] = useState();
    const [pagInfo, setPagination] = useState(INIT_PAGING);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getArticleMethod({theme}).then(res => {
            updateArticleList(res);
            setLoading(false);
        });
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
        getArticleList({theme, page}).then(res => updateArticleList(res));
    }

    const getImages = () =>  {
        if(isLoading) {
            return <div style={{paddingLeft: '50px', minWidth: '800px'}}><Progress/></div>
        }

        if(images && images.length > 0) {
            return images.map((img, i) => {
                const imgSrc = img.srcImg ? img.srcImg : '/img/dish_template.png';

                return (<Link to={`/article/${img.id}`} key={i}>
                   <div className="gallery-item" key={i} onClick={() => {} }>
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