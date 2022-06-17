import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Dialogs from "./Main/Dialogs/Dialogs";
import { Route, Routes } from "react-router-dom";

function App(props) {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/main/*" element={<Main />} />
        <Route
          path="/dialogs/"
          element={<Dialogs state={props.state.ChatPage} />}
        />
      </Routes>
    </div>
  );
}

export default App;
