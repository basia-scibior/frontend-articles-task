import * as ReactDOM from "react-dom";
import * as React from "react";
import { MainPage } from "./page/Main/Main";
import moment from "moment";

moment.locale("nn");

ReactDOM.render(<MainPage />, document.getElementById("root"));
