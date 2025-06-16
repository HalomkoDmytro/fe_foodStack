import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

const Search = () => {

    const navigate = useNavigate();
    const [search, setSearch] = useState('');

    const handleSearch = () => {
        navigate("/search");
    }

    return (
        <form className="d-flex">
            <input className="form-control me-sm-2" type="search" placeholder="Search" value={search} onChange={e=>setSearch(e.target.value)}/>
            <button className="btn btn-secondary my-2 my-sm-0" type="submit" onClick={() => handleSearch()}>Search</button>
        </form>
    );
}

export default Search;