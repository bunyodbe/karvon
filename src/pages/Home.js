import React, {Component} from 'react';
import Carousel from '../components/home/carousel/carousel';
import HotBlog from '../components/home/hotBlog/hotBlog';
import ExpertBlog from '../components/home/expertBlog/expert';
import RatingBlog from '../components/home/rating/rating';
import Discount from '../components/home/discount/discount';
import Bestseller from '../components/home/bestseller/bestseller';
// import Services from '../components/home/ourServices/services';
import SignIn from '../components/auth/signIn/signIn';
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
                {/* <Services/> */}
                <SignIn/>
            </>
        );
    }
}

export default Home;