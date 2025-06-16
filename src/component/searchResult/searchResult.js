import React, {useEffect, useState} from 'react';
import {searchArticleList} from '../../service/articleService';


const SearchResult = ({searchRequest=''}) => {

    const [request, setRequest] = useState(searchRequest);
    const [resultList, setResultList] = useState([]);

    useEffect(() => {
        startSearch();
    }, []);

    const startSearch = () => {
        if(request && request.length > 0) {
            searchArticleList({request}).then(res => {
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
            return <p>Nothing to show...</p>
        }
    }

    return (
        <div>
            <div className="input-group mb-3">
              <input type="text" class="form-control" placeholder="Looking for..." value={request} onChange={e=>setRequest(e.target.value)}/>
              <button className="btn btn-primary" type="button" onClick={e=>{startSearch()}}>Search</button>
            </div>
            SearchResult
            <div>{getList()}</div>
        </div>
    )
}

export default SearchResult;