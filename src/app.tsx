import * as React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Route, Link } from "react-router-dom";
import About from "./views/about";
import { MainScreen } from "./screens/mainScreen";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={MainScreen} />
            <Route path="/about" component={About} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
