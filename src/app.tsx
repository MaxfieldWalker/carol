import * as React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Route, Link } from "react-router-dom";
import About from "./views/about";
import { MainScreen } from "./screens/mainScreen";
import OmakaseScreen from "./screens/omakase";
import SelectScreen from "./screens/selectScreen";
import RecommendedScreen from "./screens/recommendedScreen";
import OrderConfirmationScreen from "./screens/orderConfirmationScreen";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={MainScreen} />
            <Route exact path="/omakase" component={OmakaseScreen} />
            <Route exact path="/select" component={SelectScreen} />
            <Route exact path="/items" component={RecommendedScreen} />
            <Route path="/order" component={OrderConfirmationScreen} />
            <Route path="/about" component={About} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
