import React, {Component} from 'react';

import Header from './header';

import Footer from './footer';
import Radio from './radio';
import Home from './home';

import ErrorBoundry from './error-boundry';
import {router} from '../api/route-info';
import { RouterProvider } from "react-router-dom";

import './app.css';

export default class App extends Component {
    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
      return (
        <div className="app">
            <ErrorBoundry>
                <RouterProvider router={router} />
            </ErrorBoundry>
        </div>
        );
      }
}

