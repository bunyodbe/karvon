import React, {Component} from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Layout from "./components/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from "./products/Product";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "./reducer/Myreducer";
import Home from "./pages/Home";
import Filter from "./pages/Filter";


class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Provider store={createStore(reducer)}>
                        <Router>
                            <Switch>
                                <Route path={'/'} exact render={()=><Home/>} />
                                <Route path={'/online-bozor'} exact render={()=><Filter/>} />
                                <Route path={'/products'} exact  render={()=><Product/>}/>
                                <Redirect to={'/'}/>
                            </Switch>
                        </Router>
                    </Provider>,
                </Layout>
            </div>
                )
    }
}

export default App;
