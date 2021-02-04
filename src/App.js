import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Filter from "./pages/Filter"
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    {/* <Home/> */}
                    <Filter/>
                </Layout>
            </div>
        )
    }
}

export default App;
