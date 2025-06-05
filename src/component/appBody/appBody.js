import React from 'react';

import Header from '../header';
import Footer from '../footer';

import './appBody.css'

const AppBody = ({children}) => {

//     componentDidMount() {
//         new ArticleServiceAPI().getArticle(1)
//         .then((res) => console.log("ArticleServiceAPI.getResource(1): ", res))
//         .catch((err) => console.log(err));
//     }

    return (
        <div>
            <Header/>
                {children}
            <Footer/>
        </div>
    )

}

export default AppBody;