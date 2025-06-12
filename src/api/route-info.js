import { createBrowserRouter} from "react-router-dom";
import Home from '../component/home';
import AppBody from '../component/appBody';
import DesertList from '../component/desert-list';
import ErrorIndicator from '../component/error-indicator';
import CreateArticle from '../component/createArticle';
import Encyclopedia from '../component/encyclopedia';
import Article from '../component/article';

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorIndicator/>,
        children: [
            {
                path: "home",
                element: <AppBody><Home/></AppBody>
            },
            {
                path: "article",
                element: <AppBody><Article/></AppBody>,
            },
            {
                path: "/create-article",
                element: <AppBody><CreateArticle/></AppBody>,
            },
            {
                path: "/desert-list",
                element: <AppBody><DesertList/></AppBody>,
            },
            {
                    path: "/encyclopedia",
                    element: <AppBody><Encyclopedia/></AppBody>,
            },
        ]
    },
]);

export  {router};
