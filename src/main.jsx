import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './roots/App.jsx'
import './index.css'
import Bag from './roots/Bag.jsx';
import Home from './roots/Home.jsx';
import {Provider} from 'react-redux'
import MytraStore from './store/index.js';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home/>, /*loader: postLoader*/ },
      {
        path: "/bag",
        element: <Bag />,
        // action: createPostAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={MytraStore}>
  <RouterProvider router={router} />
  </Provider>
  </React.StrictMode>
)
