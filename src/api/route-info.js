import { createBrowserRouter } from "react-router-dom";
import Home from '../component/home';
import AppBody from '../component/appBody';
import DesertList from '../component/recipe/desertList';
import MainCourseList from '../component/recipe/mainCourseList';
import CreateArticle from '../component/createArticle';
import EditArticle from '../component/editArticle';
import Encyclopedia from '../component/encyclopedia';
import SearchResult from '../component/searchResult';
import Article from '../component/article';
import Login from '../component/login';
import ErrorPage from '../component/errorPage';

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
