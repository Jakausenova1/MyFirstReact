import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import Dialogs from "./Main/Dialogs";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/dialogs/*" element={<Dialogs />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
