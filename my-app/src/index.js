import reportWebVitals from "./reportWebVitals";
import { rerenderEntireTree } from "./render";
import State from "./redux/State";

rerenderEntireTree(State);

reportWebVitals();
