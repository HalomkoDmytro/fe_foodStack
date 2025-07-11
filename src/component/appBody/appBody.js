import React from 'react';

import Header from '../header';
import Footer from '../footer';

import './appBody.css'

const AppBody = ({children}) => {

    return (
        <div>
            <Header/>
                <div className="container">
                    {children}
                </div>
            <Footer/>
        </div>
    )

}

export default AppBody;