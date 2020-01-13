import React from "react";
import ReactDOM from "react-dom";
import './global/index.scss'
import App from './components/app/app'
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
