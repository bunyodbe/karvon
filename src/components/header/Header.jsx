import React, {Component} from 'react';
import  st from './header.module.css';
import { FaPhoneAlt, FaEnvelope, FaBars, FaCaretDown, FaSearch, FaRegUser } from "react-icons/fa";
import {Link} from "react-router-dom";
class Header extends Component {
    render() {
        return (
            <>
                <div className={`${st.site_header}`}>
                    <div className={`${st.site_container}`}>
                        <div className={`${st.header_top}`}>
                            <a className={`${st.tel_link}`} href="tel:+998917911122">
                                <FaPhoneAlt className={`${st.phone_icon}`}/>
                                <span>+99891 791 11 22</span>
                            </a>
                            <a className={`${st.mail_link}`} href="mailto:info@elab.uz">
                                <FaEnvelope className={`${st.mail_icon}`}/>
                                <span>info@elab.uz</span>
                            </a>
                        </div>
                        <div className={`${st.header_middle}`}>
                            <div className={`${st.logo_categories}`}>
                                <a className={`${st.site_logo}`} href="#">Karvon</a>
                                <div className={`${st.categories_btn}`}>
                                    <FaBars className={`${st.bars_icon}`}/>
                                    <span>Kategoriyalar</span>
                                </div>
                            </div>
                            <div className={`${st.search_area}`}>
                                <div className={`${st.search_categories__btn}`}>
                                    <span>Barcha kategoriyalar</span>
                                    <FaCaretDown className={`${st.categories_btn__icon}`}/>
                                </div>
                                <input className={`${st.searching_input}`} type="text" placeholder="Izlash"/>
                                <div className={`${st.searching_btn}`}>
                                    <FaSearch/>
                                </div>
                            </div>
                            <div className={`${st.user_tools}`}>
                                <div className={`${st.log_in}`}>
                                    Log in
                                </div>
                                <div className={`${st.sign_up}`}>
                                    <FaRegUser className={`${st.user_icon}`}/>
                                    Sign up
                                </div>
                            </div>
                            <div className={`${st.change_lang}`}>
                                <div className={`${st.change_lang__btn}`}>
                                <span>Uz</span>
                                <FaCaretDown/>
                                </div> 
                            </div>
                        </div>
                        <div className={`${st.header_bottom}`}>
                            <ul className={`${st.site_nav__list}`}>
                                <li className={`${st.site_nav__item}`}>
                                    <Link className={`${st.site_nav__link} ${st.active_nav}`} to="/">Bosh sahifa</Link>
                                </li>
                                <li className={`${st.site_nav__item}`}>
                                    <Link className={`${st.site_nav__link}`} to="/online-bozor">Onlayn bozor</Link>
                                </li>
                                <li className={`${st.site_nav__item}`}>
                                    <Link className={`${st.site_nav__link}`} to="/products">Mahsulotlar</Link>
                                </li>
                                <li className={`${st.site_nav__item}`}>
                                    <Link className={`${st.site_nav__link}`} to="#">Blog</Link>
                                </li>
                                <li className={`${st.site_nav__item}`}>
                                    <Link className={`${st.site_nav__link}`} to="#">Kontakt</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Header;
