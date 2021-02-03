import React, { Component } from 'react';
import FilterOptions from '../components/filterOption/filterOption';
import {Container, Row, Col} from 'reactstrap'
class Filter  extends Component {
    render() { 
        return ( 
            <div className="container-fluid pl-3">
                <Row>
                    <Col md={{size: 4}}>
                         <FilterOptions/>
                    </Col>
                     <Col md={{size: 7, offset:1}}>
                         <h3>Hello world</h3>
                    </Col>
                    </Row>  
               
            </div>
         );
    }
}
 
export default Filter;