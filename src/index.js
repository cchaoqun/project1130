import React from 'react';
import Menu from  "./views/menu";
import ReactDOM from 'react-dom';
import { BrowserRouter,Route,Routes} from "react-router-dom";
import { routes } from "./route";
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
    <Menu></Menu>
    <Routes>
            {
                routes.map(route=>{
                    return (
                        <Route
                            key={route.path}
                            path={route.path}
                            element = { < route.com /> }
                        ></Route>
                    )
                })
            }
            </Routes>
    </BrowserRouter>
   
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
