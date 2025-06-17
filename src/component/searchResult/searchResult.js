import React, {useEffect, useState} from 'react';
import {searchArticleList} from '../../service/articleService';
import { useSelector } from 'react-redux';


const SearchResult = ({searchRequest=''}) => {

    const headerRequest = useSelector(state => state.text.value);
    const [request, setRequest] = useState(searchRequest);
    const [resultList, setResultList] = useState([]);

    useEffect(() => {
        startSearch();
    }, []);

    useEffect(() => {
        setRequest(headerRequest);
        startSearch(headerRequest);
    }, [headerRequest]);

    const startSearch = (param) => {

        if((param && param.length>0) || (request && request.length > 0)) {
            const val = param && param.length>0 ? param : request;
            searchArticleList({request: val}).then(res => {
                setResultList(res)
            });
        }
    }

    const getList = () => {
        if(resultList && resultList.content && resultList.content.length > 0) {
            let arr = [];
            resultList.content.forEach((res, i) => {
                arr.push(<div key={i}>{res.title}</div>)
            });
            return arr;
        } else {
            return <div>
                <h2>Nothing to show...</h2>
                <img style={{maxWidth: '400px'}} src={"/img/empty_plate.png"} alt="img should be here" />
            </div>
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
        </div>
    )
}

export default SearchResult;