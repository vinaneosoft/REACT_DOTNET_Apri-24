import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {RouterProvider, createBrowserRouter, redirect } from 'react-router-dom';
import {Home} from './home/Home';
import {Register} from './register/Register';
import {Login} from './login/Login';
import {MyCustomer} from './mycustomer/MyCustomer';
import {Child1} from './childs/Child1'
import {Child2} from './childs/Child2'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        loader:  () => redirect('home'),
      },
      {
        path:'home',
        element:<Home></Home>,
        children:[
          {
            path:'child1',
            element:<Child1></Child1>
          },
          {
            path:'child2',
            element:<Child2></Child2>
          }
        ]
      },
      {
        path:'customers',
        element:<MyCustomer></MyCustomer>
      },
      {
        path:'register',
        element:<Register></Register>
      },
      {
        path:'login',
        element:<Login></Login>
      }
    ]
  },
  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} >
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
