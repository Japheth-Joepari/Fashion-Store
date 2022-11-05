import React from "react";
import HomePage from "./components/Pages/homePage";
import Header from "./components/Headers/Header-demo";

import "./assets/vendor/line-awesome/line-awesome/line-awesome/css/line-awesome.min.css";
import "react-toastify/dist/ReactToastify.min.css";

import "./assets/css/bootstrap.min.css";
import "./assets/css/plugins/owl-carousel/owl.carousel.css";
import "./assets/css/plugins/magnific-popup/magnific-popup.css";
import "./assets/css/plugins/jquery.countdown.css";

import "./assets/css/style.css";
import "./assets/css/skins/skin-demo-6.css";
import "./assets/css/demos/demo-6.css";
// import image from "./Images/fashion.jpg";
const App = () => {
  return (
    <>
      <Header />
      <HomePage />
    </>
  );
};
export default App;
