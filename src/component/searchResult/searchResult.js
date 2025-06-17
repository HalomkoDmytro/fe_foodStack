import React, {useEffect, useState} from 'react';
import {searchArticleList} from '../../service/articleService';
import { Link } from "react-router-dom";
import Pagination from '../pagination';
import FullWidthCenter from '../fullWidthCenter';
import Progress from '../progress';
import { useSelector } from 'react-redux';

import './searchResult.css'

const INIT_PAGING = {pageNumber: 0, pageSize: 8, totalElements: 1, totalPages: 1,
    first: true, hasNext: false, hasPrevious: false, last: false };

const SearchResult = ({searchRequest=''}) => {

    const headerRequest = useSelector(state => state.text.value);
    const [request, setRequest] = useState(searchRequest);
    const [resultList, setResultList] = useState([]);
    const [pagInfo, setPagination] = useState(INIT_PAGING);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        startSearch();
    }, []);

    useEffect(() => {
        setRequest(headerRequest);
        startSearch(headerRequest);
    }, [headerRequest]);

    const startSearch = (param, pageNumber=0) => {
        setLoading(true);
        if((param && param.length>0) || (request && request.length > 0)) {
            const val = param && param.length>0 ? param : request;
            searchArticleList({request: val, page: pageNumber}).then(res => {
                setResultList(res);
                const {pageNumber, pageSize, totalElements, totalPages, first,  hasNext,  hasPrevious,  last} = res;
                setPagination({pageNumber, pageSize, totalElements, totalPages,first,  hasNext,  hasPrevious,  last});
                setLoading(false);
            });
        }
    }

    const getList = () => {
        if(isLoading) {
            return <Progress/>
        }
        if(resultList && resultList.content && resultList.content.length > 0) {
            let arr = [];
            resultList.content.forEach((res, i) => {
                const imgSrc = res.srcImg ? res.srcImg : '/img/dish_template.png';
                arr.push(<Link  className={"nav nav-search"} key={i}  to={`/article/${res.id}`}>
                    <img src={imgSrc} style={{maxWidth: '200px'}} alt="img should be here" />
                    <div>
                        <h3> {res.title}</h3>
                        <p>{res.description}</p>
                    </div>
                </Link>)
            });
            return arr;
        } else {
            return <div>
                <h2>Nothing to show...</h2>
                <img style={{maxWidth: '400px'}} src={"/img/empty_plate.png"} alt="img should be here" />
            </div>
        }
    }

    const getPagination = () => {
        if(pagInfo && pagInfo.totalPages > 1) {
            return <Pagination first={pagInfo.first} last={pagInfo.last}  totalPages={pagInfo.totalPages}
            pageNumber={pagInfo.pageNumber} updatePage={(e) => startSearch(request, e)}/>
        }
    }

    return (
        <div>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Looking for..." value={request} onChange={e=>setRequest(e.target.value)}/>
              <button className="btn btn-primary" type="button" onClick={e=>{startSearch()}}>Search</button>
            </div>
            <p></p>
            <div>{getList()}</div>
            <FullWidthCenter>
                {getPagination()}
            </FullWidthCenter>
        </div>
    )
}

export default SearchResult;