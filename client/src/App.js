import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Signup from "./component/user/signup";
import Login from "./component/user/login";
import Map from "./component/index/map";
import Chat from "./component/chat/chat";
import Admin from "./component/admin/Admin"
import { Switch, Route } from "react-router-dom";
// import {Bros} from 'react-router'
import Header from "./component/menu/header";
class App extends React.Component {
  render() {
    return (
      //Luồng xử lý chính redux gọi vào usersAction xử lý => Dispatcher tới users.js/reducers để lưu state => lưu vào rootReducer trong index.js/reducers
      <Provider store={store}>
        <Header />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/map" component={Map} />
          <Route path="/chat" component={Chat} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </Provider>
    );
  }
}

export default App;
