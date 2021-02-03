import React, { Component } from 'react';
import st from './discount.module.css';
import { FaEye, FaComment } from "react-icons/fa";

class Discount extends Component {
    render() { 
        return ( 
            <>
                <div className={`${st.discounts}`}>    
                    <div className={`${st.site_container}`}>
                        <h2 className={`${st.section_title}`}>Chegirmalar</h2>
                        <div className={`${st.discounts_cards__wrapper}`}>
                            <div className={`${st.discount_card}`}>
                                <div className={`${st.discount_card__img}`}>
                                    {/* rasm uchun joy*/}
                                </div>
                                <a className={`${st.discount_card__link}`} href="#">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, delectus!</a>
                                <div className={`${st.discount_card__content}`}>
                                    <span>Admin</span>
                                    <span>
                                        <FaEye className={`${st.eye_icon}`}/>
                                        <span>100</span>
                                        <FaComment className={`${st.comment_icon}`}/>
                                        <span>70</span>
                                    </span>
                                </div>
                            </div>
                            <div className={`${st.discount_card}`}>
                                <div className={`${st.discount_card__img}`}>
                                    {/* rasm uchun joy*/}
                                </div>
                                <a className={`${st.discount_card__link}`} href="#">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, delectus!</a>
                                <div className={`${st.discount_card__content}`}>
                                    <span>Admin</span>
                                    <span>
                                        <FaEye className={`${st.eye_icon}`}/>
                                        <span>100</span>
                                        <FaComment className={`${st.comment_icon}`}/>
                                        <span>70</span>
                                    </span>
                                </div>
                            </div>
                            <div className={`${st.discount_card}`}>
                                <div className={`${st.discount_card__img}`}>
                                    {/* rasm uchun joy*/}
                                </div>
                                <a className={`${st.discount_card__link}`} href="#">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, delectus!</a>
                                <div className={`${st.discount_card__content}`}>
                                    <span>Admin</span>
                                    <span>
                                        <FaEye className={`${st.eye_icon}`}/>
                                        <span>100</span>
                                        <FaComment className={`${st.comment_icon}`}/>
                                        <span>70</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </>
         );
    }
}
 
export default Discount;