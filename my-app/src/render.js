import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { addPost } from "./redux/State";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);

export let rerenderEntireTree = (State) => {
  root.render(
    <BrowserRouter>
      <App state={State} addPost={addPost} />
    </BrowserRouter>
  );
};
