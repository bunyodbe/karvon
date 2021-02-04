import React, { Component } from 'react';
import FilterOptions from '../components/filterOption/filterOption';
import {Container, Row, Col} from 'reactstrap';
import st from './filter.module.css';

class Filter  extends Component {
    render() { 
        return ( 
            <div className={`${st.site_container}`}>
                <FilterOptions/>
            </div>
         );
    }
}
 
export default Filter;