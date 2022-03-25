import "./App.css";
import Header from "./Header";
import Home from "./Home";
import ItemRow from "./ItemRow";

import { Route, Switch } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Register from "./Register";

import axios from "axios";
import { useEffect, useState } from "react";
import AddProduct from "./AddProduct";
import ManageOrder from "./ManageOrder";
import ContactusPage from "./ContactusPage";

axios.defaults.withCredentials = true;

function App() {
  const [userInformation, setUserInformation] = useState([]);

  useEffect(() => {
    try {
      const data = localStorage.getItem("user");
      const jsonData = JSON.parse(data);
      setUserInformation(jsonData);
      console.log("username is ", jsonData);
    } catch (Error) {
      console.log("error found");
    }
  }, []);
  console.log("user in formation is ", userInformation);

  return (
    <div className="app">
      <Switch>
        {/* Register page */}
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/admin/additem" exact>
          <AddProduct />
        </Route>
        {/* login page */}
        <Route path="/login" exact>
          <Login />
        </Route>

        {/* checkout page */}
        <Route path="/checkout" exact>
          <Header />
          <Checkout />
        </Route>

        {/* homepage */}
        <Route path="/" exact>
          <Header username={userInformation ? userInformation.username : " "} />
          <Home />
          {/* {userInfomation.loggedIn ? <ItemRow /> : " "} */}

          {userInformation ? <ItemRow /> : ""}
          <ContactusPage />
        </Route>

        {/* manage orders page */}
        <Route to="/admin/manageorder" exact>
          <ManageOrder />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
