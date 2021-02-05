import React, {Component} from 'react';
import {Container, Row, Col, Card, CardImg, CardImgOverlay, Table, CardBody} from "reactstrap";
import './product.css';
import car from '../components/img/car.PNG'
import {
    FaStar, FaComment, FaFacebook, FaInstagram, FaTelegram, FaTwitter,
    FaAlipay, FaShoppingCart, FaHeart, FaBolt
} from 'react-icons/fa'
import {} from 'bootstrap/dist/css/bootstrap.min.css'

const datum = [
    {
        "name": "Terrible Madness",
        // "title":"THRILLE, DRAMA, HORROR",
        "genre": "THRILLE, DRAMA, HORROR",
        "rank": "4.7",
        "view": "244 reviews",
        "newPrice": "45.4",
        "oldPrice": "98.4"
    },
    {
        "name": "Battle Drive",
        // "title":"poor dad",
        "genre": "THRILLE, DRAMA, HORROR",
        "rank": "4.7",
        "view": "244 reviews",
        "newPrice": "45.4",
        "oldPrice": "98.4"
    },
    {
        "name": "Take out Tango",
        "genre": "THRILLE, DRAMA, HORROR",
        "rank": "4.7",
        "view": "244 reviews",
        "newPrice": "45.4",
        "oldPrice": "98.4"
    }
];

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container>
                <Row className="mt-3 pl-3">
                    <Col md={{size: 12}} className="navStyle">
                        <h5 className="mt-1 ml-2">Home/products/prouct</h5>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col md={{size: 4}}>
                        <Card>
                            <CardImg className="imgSrc" src={car} alt=""/>
                            <CardImgOverlay className="text-center">
                                <h3 className="text-center imgText mt-5">All<br/> Good<br/> News</h3>
                                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Commodi cum delectus harum laudantium officiis perferendis repellendus unde. </p>
                            </CardImgOverlay>
                        </Card>
                    </Col>
                    <Col md={{size: 8, marginLeft: 10}}>
                        <h1 className="font-weight-bold ml-1">All Good News</h1>
                        <div>
                            <p className="d-inline-block section-star-style">
                                <FaStar className="section-star"/>
                                <FaStar className="section-star"/>
                                <FaStar className="section-star"/>
                                <FaStar className="section-star"/>
                                <FaStar className="section-star"/>
                            </p>
                            <p className="d-inline-block ml-1">
                                <h6 className="font-weight-bold mt-3">4.0</h6>
                            </p>
                            <p className="d-inline-block ml-2">
                                <FaComment/>
                                <span className="comment">2014 commentaries</span>
                            </p>

                            <p className="d-inline-block ml-5">
                                <a href="#" type="button" className="btn bg-primary butStyle"><FaFacebook
                                    className="icnStyle"/> Facebook
                                </a>
                                <a href="#" type="button" className="btn bg-danger butStyle "><FaInstagram
                                    className="icnStyle"/> Instagram
                                </a>
                                <a href="#" type="button" className="btn bg-primary butStyle"><FaTelegram
                                    className="icnStyle"/> Telegram
                                </a>
                                <a href="#" type="button" className="btn bg-info butStyle"><FaTwitter
                                    className="icnStyle"/> Twitter
                                </a>
                            </p>
                        </div>
                        <p className="textStyle">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, consectetur corporis,
                            delectus deleniti dolorem est fugiat harum iure molestiae nobis nulla quam quia ratione
                            repellat sint sit soluta vitae voluptatibus.<br/><br/>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem dicta eius enim
                            obcaecati pariatur quisquam repellat sapiente tempore! Beatae consequuntur, exercitationem
                            illum maxime neque optio placeat quia unde velit?
                        </p>
                        <Row className="pb-2 m-0 border-bottom">
                            <Col md={{size: 12}} className="p-0 m-0">
                                <img src={car} alt="" className="LittleImgstyle" width={60} height={50}/>
                                <div className="span-style">
                                    <p id="pStyle">Writen by</p>
                                    <h6>Kevin Smiley</h6>
                                </div>
                                <div className="span-style ml-5">
                                    <p>Publisher</p>
                                    <h6>Printarea Studios</h6>
                                </div>
                                <div className="span-style ml-5">
                                    <p>Year</p>
                                    <h6>2019</h6>
                                </div>
                                <div className="span-styleLeftButton">
                                    <a href="#" type="button"
                                       className="btn bg-light text-info font-weight-bold"><FaAlipay/> FREE SHIPIING</a>
                                    <a href="#" type="button"
                                       className="btn bg-light text-success font-weight-bold"><FaStar/> IN SOTTCKS</a>
                                </div>
                            </Col>
                        </Row>
                        <Row className="mt-3 pl-2">
                            <div className="bottomStyle">
                                <h3>$15,63</h3>
                                <p>$616.94</p>
                                <button type="button" className="btn">2%</button>
                            </div>
                            <div className="btn-toolbar d-inline-block" role="toolbar"
                                 aria-label="Toolbar with button groups">
                                <div className="btn-group" role="group" aria-label="First group">
                                    <button type="button" className="btn bg-white text-primary font-weight-bold">-
                                    </button>
                                    <button type="button" className="btn bg-white text-dark font-weight-bold">1</button>
                                    <button type="button" className="btn bg-white text-primary font-weight-bold">+
                                    </button>
                                </div>
                            </div>
                            <div className="d-inline-block">
                                <button className="btn bg-primary shopCartIcon text-white ml-5"><FaShoppingCart/> Add to
                                    cart
                                </button>
                                <button className="btn bg-white shopCartIcon text-primary ml-2 border"><FaHeart/>
                                </button>
                            </div>
                        </Row>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md={{size: 8}}>
                        <h3 className="d-inline-block font-weight-bold">Details Product</h3>
                        <h3 className="d-inline-block ml-4">Customer Reviews</h3>
                        <Table className="table border hover mt-3">
                            <tbody>
                            <tr className="text-justify">
                                <th>Book Title</th>
                                <td>All Good news</td>
                            </tr>
                            <tr className="text-justify">
                                <th>Author</th>
                                <td>Kevin Smiler</td>
                            </tr>
                            <tr className="text-justify">
                                <th>ISBN</th>
                                <td>121341381648(ISBN13: 121341381648)</td>
                            </tr>
                            <tr className="text-justify">
                                <th>Edition Language</th>
                                <td>English</td>
                            </tr>
                            <tr className="text-justify">
                                <th>Book Format</th>
                                <td>Paperback, 450 Pages</td>
                            </tr>
                            <tr className="text-justify">
                                <th>Date Published</th>
                                <td>August 10 th 2019</td>
                            </tr>
                            <tr className="text-justify">
                                <th>Publisher</th>
                                <td>Wepress Inc.</td>
                            </tr>
                            <tr className="text-justify">
                                <th>Tags</th>
                                <td>
                                    <button type="button" className="btn bg-light text-info ml-2">Drama</button>
                                    <button type="button" className="btn bg-light text-info ml-2">Advanture</button>
                                    <button type="button" className="btn bg-light text-info ml-2">Survival</button>
                                    <button type="button" className="btn bg-light text-info ml-2">Biography</button>
                                    <button type="button" className="btn bg-light text-info ml-2">Trending2020</button>
                                    <button type="button" className="btn bg-light text-info ml-2 mt-2">Betseller</button>
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col md={{size: 4}}>
                        <h3 className="text-left font-weight-bold">Related Books</h3>
                        {
                            datum.map((item, index) => (
                                <Row>
                                    <Col md={{size: 4}}>
                                        <Card className="p-0 bg-transparent d-inline-block mt-3">
                                            <CardBody className="p-0">
                                                <CardImg className="imgStyleSidebar" src={car} alt=""/>
                                                <CardImgOverlay
                                                    className="text-white text-center mt-5 font-weight-bold">
                                                    <h3 className="text-white">{item.name}</h3>
                                                </CardImgOverlay>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col md={{size: 8}}>
                                        <div className="mt-3 ml-5">
                                            <h5 className="font-weight-bold">{item.name}</h5>
                                            <p className="pStyle">{item.genre}</p>
                                        </div>
                                        <div className="ml-5">
                                            <FaStar className="section-star d-inline-block"/>
                                            <p className="pppp d-inline-block ml-2">{item.rank}</p>
                                            <p className="dddd d-inline-block ml-2">{item.view}</p>
                                        </div>
                                        <div className="ml-5">
                                            <h4 className="font-weight-bold d-inline-block">${item.newPrice}</h4>
                                            <p className="ml-2 d-inline-block ssss">${item.oldPrice}</p>
                                        </div>
                                        <div className="ml-5">
                                            <button type="button" className="btn bg-light text-primary">
                                                <FaShoppingCart/> Add to cart
                                            </button>
                                        </div>
                                    </Col>
                                </Row>
                            ))
                        }
                        <a href="#" type="button" className="btn mt-3 bg-info viewMore">View More</a>
                    </Col>
                </Row>
                <Row className="mt-5 bg-light p-5">
                    <Col md={{size: 3}}>
                        <Row md={12}>
                            <Col md={{size: 4}}>
                              <FaBolt className="bg-primary faboltt text-white"/>
                            </Col>
                            <Col md={{size: 8}}>
                                <h6 className="font-weight-bold">Quick Delivery</h6>
                                <p className="sectionP">Lorem ipsum dolor sit amet.</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={{size: 3}}>
                        <Row md={12}>
                            <Col md={{size: 4}}>
                              <FaBolt className="bg-primary faboltt text-white"/>
                            </Col>
                            <Col md={{size: 8}}>
                                <h6 className="font-weight-bold">Secure Payment</h6>
                                <p className="sectionP">Lorem ipsum dolor sit amet.</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={{size: 3}}>
                        <Row md={12}>
                            <Col md={{size: 4}}>
                              <FaBolt className="bg-primary faboltt text-white"/>
                            </Col>
                            <Col md={{size: 8}}>
                                <h6 className="font-weight-bold">Best Quality</h6>
                                <p className="sectionP">Lorem ipsum dolor sit amet.</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={{size: 3}}>
                        <Row md={12}>
                            <Col md={{size: 4}}>
                              <FaBolt className="bg-primary faboltt text-white"/>
                            </Col>
                            <Col md={{size: 8}}>
                                <h6 className="font-weight-bold">Return guarantee</h6>
                                <p className="sectionP">Lorem ipsum dolor sit amet.</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md={{size: 12}}>
                        <h3 className="font-weight-bold">Books on Sale</h3>
                    </Col>
                </Row>
                <Row>
                 <Col md={{size: 2}}>
                     <Card className="p-0 bg-transparent d-inline-block mt-3">
                         <CardBody className="p-0">
                             <CardImg className="imgStyleFooter" src={car} alt=""/>
                             <CardImgOverlay
                                 className="text-white text-center mt-5 font-weight-bold">
                                 <h5 className="text-white">Terrible Madnesss</h5>
                             </CardImgOverlay>
                         </CardBody>
                     </Card>
                 </Col>
                </Row>
            </Container>
        )
    }


}

export default Product;