import React, { Component } from 'react';
import st from './rating.module.css';

class Rating  extends Component {
    render() { 
        return ( 
            <>
            <div className={`${st.rating_blog}`}>
                <div className={`${st.site_container}`}>
                    <h2 className={`${st.section_title}`}>Reyting</h2>
                    <div className={`${st.rating_cards_wrapper}`}>
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
                    </div>
                </div>
            </div>
        </>
         );
    }
}
 
export default Rating;
