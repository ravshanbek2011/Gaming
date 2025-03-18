import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './page/ErrorPage';
import HomePage from './page/HomePage';
import AboutPage from './page/AboutPage';
import ServicePage from './page/ServicePage';
import ContactPage from './page/ContactPage';
import NewPage from './page/NewPage';

const myRouter = createBrowserRouter([{
  path:"/",
  element: <App />,
  errorElement: <ErrorPage />,
  children: [
    {
      path:"/",
      element: <HomePage />
    },
    {
      path:"/about",
      element: <AboutPage />
    },
    {
      path:"/service",
      element: <ServicePage />
    },
    {
      path:"/new",
      element: <NewPage />
    },
    {
      path:"/contact",
      element: <ContactPage />
    }
  ]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={myRouter} />
  </React.StrictMode>
);