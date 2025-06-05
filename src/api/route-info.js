import { createBrowserRouter} from "react-router-dom";
import Home from '../component/home';
import AppBody from '../component/appBody';
import DesertList from '../component/desert-list';
import ErrorIndicator from '../component/error-indicator';
import CreateArticle from '../component/createArticle';

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppBody><Home/></AppBody>,
        errorElement: <ErrorIndicator/>,
        children: [
            {
                path: "home",
                element: <AppBody><Home/></AppBody>
            },
            ]
    },
    {
        path: "/desert-list",
        element: <AppBody><DesertList/></AppBody>,
    },
    {
        path: "/create-article",
        element: <AppBody><CreateArticle/></AppBody>,
    },

]);

export  {router};
