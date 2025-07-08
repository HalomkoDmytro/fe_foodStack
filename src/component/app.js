import React, {useState} from 'react';

import Header from './header';

import Footer from './footer';
import Radio from './radio';
import Home from './home';

import ErrorBoundry from './error-boundry';
import {router} from '../api/route-info';
import { RouterProvider } from "react-router-dom";


const App = () => {

//     const [hasError, setHasError] = useState(false);
//     componentDidCatch() {
//         this.setState({ hasError: true });
//     }

    return (
        <div className="app">
            <ErrorBoundry>
                <RouterProvider router={router} />
            </ErrorBoundry>
        </div>
    );

}

export default App;