import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from "redux";
import {Switch, BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import reducer from './reducer/Myreducer'
import Layout from "./components/Layout";
import Product from "./products/Product";


ReactDOM.render(
    <Provider store={createStore(reducer)}>
        <Router>
            <Switch>
                <Route path={'/online-bozor'} render={()=> <Layout/>} />
                <Route path={'/home'} render={()=> <Layout/>} />
                <Route path={'/products'} render={()=> <Product/>} />
                <Redirect to={'/products'}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);

