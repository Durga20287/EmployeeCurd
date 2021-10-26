import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListEmployee from "./Component/ListEmployee";
import AddEmp from "./Component/AddEmp";
import Header from "./Component/Header";
import Footer from "./Component/Footer"
import ViewEmployee from "./Component/ViewEmployee";

function App()
 {
  return (
    <div>
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListEmployee}></Route>
            <Route path="/employees" component={ListEmployee}></Route>
            <Route path="/add-employee/:id" component={AddEmp} ></Route>
            <Route path="/view-employee/:id" component={ViewEmployee}></Route>
          </Switch>
        </div>
        <div style={{textAlign:"center"}}>
        <Footer />
        </div>
      </Router>
    </div>
  );
}
export default App;