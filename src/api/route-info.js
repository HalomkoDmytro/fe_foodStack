import { createBrowserRouter } from "react-router-dom";
import Home from '../component/home';
import AppBody from '../component/appBody';
import DesertList from '../component/recipe/desertList';
import MainCourseList from '../component/recipe/mainCourseList';
import CreateArticle from '../component/createArticle';
import Encyclopedia from '../component/encyclopedia';
import Article from '../component/article';
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
]);

export  {router};
