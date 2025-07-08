import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import AppBody from '../component/appBody';
const Home = React.lazy(() => import('../component/home'));
const DesertList = React.lazy(() => import('../component/recipe/desertList'));
const MainCourseList = React.lazy(() => import('../component/recipe/mainCourseList'));
const CreateArticle = React.lazy(() => import('../component/createArticle'));
const EditArticle = React.lazy(() => import('../component/editArticle'));
const Encyclopedia = React.lazy(() => import('../component/encyclopedia'));
const SearchResult = React.lazy(() => import('../component/searchResult'));
const Article = React.lazy(() => import('../component/article'));
const Login = React.lazy(() => import('../component/login'));
const ErrorPage = React.lazy(() => import('../component/errorPage'));

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppBody><Home/></AppBody>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "home",
                element: <AppBody><Home/></AppBody>
            },
        ],
    },
    {
        path: "/article/:idArticle",
        element: <AppBody><Article/></AppBody>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/create-article",
        element: <AppBody><CreateArticle/></AppBody>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/edit-article/:idArticle",
        element: <AppBody><EditArticle/></AppBody>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/recipe",
        errorElement: <ErrorPage/>,
        children: [
            {
               path: "dessert-list",
               element: <AppBody><DesertList/></AppBody>,
           },
           {
               path: "main-course",
               element: <AppBody><MainCourseList/></AppBody>,
           },
       ],
    },
    {
        path: "/encyclopedia",
        element: <AppBody><Encyclopedia/></AppBody>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/search",
        element: <AppBody><SearchResult/></AppBody>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/login",
        element: <AppBody><Login/></AppBody>,
        errorElement: <ErrorPage/>,
    },
]);

export  {router};
