import React from "react";
import Header from "./Header";
import Footer from "./Footer";
const Layout = (props) => {
  return (
    <div className="main-container">
      <Header />
      <main className="page-main">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
