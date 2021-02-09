import React, { Component } from 'react';
import st from './rating.module.css';
import { Container, Row, Col } from "reactstrap";

class Rating  extends Component {
    render() { 
        return ( 
            <>
            <div className={`${st.rating_blog}`}>
                <Container className={`${st.site_container}`}>
                    <h2 className={`${st.section_title}`}>Reyting</h2>
                    <Row className={`${st.rating_cards_wrapper}`}>
                        <Col>
                        <div className={`${st.rating_card}`}>
                            <div className={`${st.rating_card__img}`}>
                                {/* rasm uchun joy */}
                            </div>
                            <div className={`${st.rating_card__mask}`}>
                                <div className={`${st.rating_card__title}`}>
                                    MyBusiness.uz - Сеть магазинов электроники, бесплатная доставка, рассрочка
                                </div>
                                <a className={`${st.rating_card__link}`} href="#">Davomini o'qish</a>
                            </div>
                        </div>
                        </Col>
                        <Col>
                        <div className={`${st.rating_card}`}>
                            <div className={`${st.rating_card__img}`}>
                                {/* rasm uchun joy */}
                            </div>
                            <div className={`${st.rating_card__mask}`}>
                                <div className={`${st.rating_card__title}`}>
                                    MyBusiness.uz - Сеть магазинов электроники, бесплатная доставка, рассрочка
                                </div>
                                <a className={`${st.rating_card__link}`} href="#">Davomini o'qish</a>
                            </div>
                        </div>
                        </Col>
                        <Col>
                        <div className={`${st.rating_card}`}>
                            <div className={`${st.rating_card__img}`}>
                                {/* rasm uchun joy */}
                            </div>
                            <div className={`${st.rating_card__mask}`}>
                                <div className={`${st.rating_card__title}`}>
                                    MyBusiness.uz - Сеть магазинов электроники, бесплатная доставка, рассрочка
                                </div>
                                <a className={`${st.rating_card__link}`} href="#">Davomini o'qish</a>
                            </div>
                        </div>
                        </Col>
                        <Col>
                        <div className={`${st.rating_card}`}>
                            <div className={`${st.rating_card__img}`}>
                                {/* rasm uchun joy */}
                            </div>
                            <div className={`${st.rating_card__mask}`}>
                                <div className={`${st.rating_card__title}`}>
                                    MyBusiness.uz - Сеть магазинов электроники, бесплатная доставка, рассрочка
                                </div>
                                <a className={`${st.rating_card__link}`} href="#">Davomini o'qish</a>
                            </div>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
         );
    }
}
 
export default Rating;
