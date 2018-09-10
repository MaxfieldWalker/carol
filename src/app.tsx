import * as React from "react";
import TextInput from "./views/textInput";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import About from "./views/about";

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                        <h1 className="title">react-web-boilerplate</h1>
                        <Route exact path="/" component={TextInput} />
                        <Route path="/about" component={About} />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}
