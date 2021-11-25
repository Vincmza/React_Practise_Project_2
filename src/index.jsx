/*React et router*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
/*composants*/
import Home from "./pages/Home/index";
import Survey from "./pages/Survey/index";
import reportWebVitals from "./reportWebVitals";
import "./index.css"

ReactDOM.render(
    <React.StrictMode>
        <Router>
          <Routes>        
              <Route exact path="/" exact element={<Home/>}></Route>
              <Route exact path="/survey" exact element={<Survey/>}></Route>      
          </Routes>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
