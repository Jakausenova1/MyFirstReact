import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Dialogs from "./Main/Dialogs/Dialogs";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/main/*" element={<Main />} />
        <Route
          path="/dialogs/"
          element={<Dialogs state={props.state.ChatPage} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
