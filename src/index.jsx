/*React et router*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

/*composants*/
import Header from "./components/Header/index";
import Home from "./pages/Home/index";
import Survey from "./pages/Survey/index";
import Results from "./pages/Results/index"
import Freelances from "./pages/Freelances/index";
import Error from "./components/Error/index";
import Footer from "./components/Footer/index";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import GlobalStyle from "./utils/style/GlobalStyle"
import { ThemeProvider } from "./utils/context/index";
import {SurveyProvider} from "./utils/context/index"


ReactDOM.render(
    <React.StrictMode>
        <Router>
            <ThemeProvider>
                <SurveyProvider>
                    <GlobalStyle/>
                    <Header />
                    <Routes>
                        <Route exact path="/" exact element={<Home />}></Route>
                        <Route exact path="/survey/:questionNumber" exact element={<Survey />}></Route>
                        <Route exact path="/results" exact element={<Results/>}/>
                        <Route exact path="/freelances" exact element={<Freelances/>}/>
                        <Route path="*" element={<Error/>}/>
                    </Routes>
                    <Footer/>
                </SurveyProvider>
            </ThemeProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
