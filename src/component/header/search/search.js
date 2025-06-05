import React from 'react';

const Search = () => {

    return (
        <form className="d-flex">
            <input className="form-control me-sm-2" type="search" placeholder="Search"/>
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
    );
}

export default Search;