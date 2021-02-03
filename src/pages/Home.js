import React, {Component} from 'react';
import {Container,Row,Col} from 'reactstrap';
import Carousel from '../components/carousel/carousel';
import HotBlog from '../components/hotBlog/hotBlog';
import ExpertBlog from '../components/expertBlog/expert';
import RatingBlog from '../components/rating/rating';
import Discount from '../components/discount/discount';
import Bestseller from '../components/bestseller/bestseller';
import Services from '../components/ourServices/services';
import SignInModal from '../components/signInModal/signInModal';
class Home extends Component {
    render() {
        return (
            <>
                <Carousel/>
                {/* <HotBlog/> */}
                <ExpertBlog/>
                <RatingBlog/>
                <Discount/>
                <Bestseller/>
                <Services/>
                <SignInModal/>
            </>
        );
    }
}

export default Home;