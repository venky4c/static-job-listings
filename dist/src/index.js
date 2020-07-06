import React from "react";
import { render } from "react-dom";
//import App from "./App";
import "../src/css/main.css";
import JOBS from "./data.json";
import FilterableSkillsTable from "./components/FilterableSkillsTable";

render(<FilterableSkillsTable jobs={JOBS} />, document.getElementById("root"));
