import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';



import './home.css';

const Home = () => {
    const count = useSelector((state) => state.counter.value)

    return (
        <div>

        <div className="home">
            <h1>Home {count}</h1>
        </div>
        </div>
    );

}

export default Home;