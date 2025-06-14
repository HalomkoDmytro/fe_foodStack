import { createBrowserRouter } from "react-router-dom";
import Home from '../component/home';
import AppBody from '../component/appBody';
import DesertList from '../component/desert-list';
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
        path: "/dessert-list",
        element: <AppBody><DesertList/></AppBody>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/encyclopedia",
        element: <AppBody><Encyclopedia/></AppBody>,
        errorElement: <ErrorPage/>,
    },
]);

export  {router};
