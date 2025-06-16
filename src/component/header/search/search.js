import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setText } from '../../../utils/slice/textSlice';

const Search = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');

    const handleSearch = () => {
        if(search && search.length > 2) {
            dispatch(setText(search));
            navigate("/search");
            setSearch('');
        }
    }

    return (
        <div className="d-flex">
            <input className="form-control me-sm-2" type="search" placeholder="Search" value={search} onChange={e=>setSearch(e.target.value)}/>
            <button className="btn btn-secondary my-2 my-sm-0" onClick={() => handleSearch()}>Search</button>
        </div>
    );
}

export default Search;