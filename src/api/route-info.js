import React, { Suspense } from 'react';
import { createBrowserRouter } from "react-router-dom";
import AppBody from '../component/appBody';
import Progress from '../component/progress';
const ErrorPage = import('../component/errorPage');

const Home = React.lazy(() => import('../component/home'));
const DesertList = React.lazy(() => import('../component/recipe/desertList'));
const MainCourseList = React.lazy(() => import('../component/recipe/mainCourseList'));
const CreateArticle = React.lazy(() => import('../component/createArticle'));
const EditArticle = React.lazy(() => import('../component/editArticle'));
const Encyclopedia = React.lazy(() => import('../component/encyclopedia'));
const SearchResult = React.lazy(() => import('../component/searchResult'));
const Article = React.lazy(() => import('../component/article'));
const Login = React.lazy(() => import('../component/login'));


const withAppBody = (Component) => (
  <AppBody>
    <Suspense fallback={<Progress />}>
      <Component />
    </Suspense>
  </AppBody>
);

const createRoute = (path, Component, children = null) => ({
    path,
    element: withAppBody(Component),
    errorElement: <ErrorPage />,
    ...(children && { children })
});

const routes = [
    createRoute("/", Home, [
        createRoute("home", Home)
    ]),
    createRoute("/article/:idArticle", Article),
    createRoute("/create-article", CreateArticle),
    createRoute("/edit-article/:idArticle", EditArticle),
    {
        path: "/recipe",
        errorElement: <ErrorPage />,
        children: [
            createRoute("dessert-list", DesertList),
            createRoute("main-course", MainCourseList)
        ]
    },
    createRoute("/encyclopedia", Encyclopedia),
    createRoute("/search", SearchResult),
    createRoute("/login", Login)
];

const router = createBrowserRouter(routes);

export { router };