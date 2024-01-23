import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import "./index.css";

const Header = React.lazy(() => import("common_components_lib/Header"));
const Footer = React.lazy(() => import("common_components_lib/Footer"));

const App = () => (
  <>
    <Suspense fallback={<>Loading...</>}>
      <Header />
      <Footer />
    </Suspense>
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
