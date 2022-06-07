import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import Post from "./Main/Posts/Post";
import Order from "./Main/Order";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Post />
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/order" element={<Order />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
