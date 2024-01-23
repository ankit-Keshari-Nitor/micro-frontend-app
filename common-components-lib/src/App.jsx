import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

const App = () => (
  <>
    <Header />
    <Footer />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
