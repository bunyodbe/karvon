import React, { Component } from 'react';
import st from './product.module.css';
import {FaStar, FaFacebookF, FaTwitter, FaWhatsapp, FaEnvelope, FaBolt, FaRegHeart, FaRegThumbsUp} from "react-icons/fa";
import { RiShieldCheckFill } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";

class Product extends Component {
    render() { 
        return (  
            <>
                <div className={`${st.product_info}`}>
                    <div className={`${st.site_container}`}>
                        <div className={`${st.product_main__content}`}>
                            <div className={`${st.product_img}`}>
                                {/* rasm uchun joy*/}
                            </div>
                            <div className={`${st.product_main__info}`}>
                                <h3 className={`${st.product_title}`}>Product Name</h3>
                                <div className={`${st.product_subtitle}`}>
                                    <ul className={`${st.product_rating}`}>
                                        <li><FaStar className={`${st.star_icon}`}/></li>
                                        <li><FaStar className={`${st.star_icon}`}/></li>
                                        <li><FaStar className={`${st.star_icon}`}/></li>
                                        <li><FaStar className={`${st.star_icon}`}/></li>
                                        <li><FaStar className={`${st.star_icon}`}/></li>
                                    </ul>   
                                    <div className={`${st.product_social__media}`}>
                                        <a className={`${st.facebook_link}`} href="#">
                                            <FaFacebookF/> <span>Facebook</span>
                                        </a>
                                        <a className={`${st.twitter_link}`} href="#">
                                            <FaTwitter/> <span>Twitter</span>
                                        </a>
                                        <a className={`${st.whatsapp_link}`} href="#">
                                            <FaWhatsapp/> <span>Whatsapp</span>
                                        </a>
                                        <a className={`${st.email_link}`} href="#">
                                            <FaEnvelope/> <span>Email</span>
                                        </a>
                                    </div>
                                </div>  
                                <div className={`${st.product_info__text}`}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                                    <br/><br/>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </div> 
                                <div className={`${st.product_main__info__middle}`}>
                                    <div className={`${st.about_product}`}>
                                        <div className={`${st.product_owner}`}>
                                            <span className={`${st.product_owner__title}`}>Writen by</span>
                                            <span className={`${st.product_owner__name}`}>Kevin Smiley</span>
                                        </div>
                                        <div className={`${st.product_factory}`}>
                                            <span className={`${st.product_factory__title}`}>Publisher</span>
                                            <span className={`${st.product_factory__name}`}>Printarea Studios</span>
                                        </div>
                                        <div className={`${st.product_date}`}>
                                            <span className={`${st.product_date__title}`}>Year</span>
                                            <span className={`${st.product_date__name}`}>2020</span>
                                        </div>
                                    </div>
                                    <div className={`${st.about_product__shipping}`}>
                                        <div className={`${st.product_shipping}`}>
                                            <FaBolt className={`${st.bolt_icon}`}/> 
                                            <span>Free Shipping</span>
                                        </div>
                                        <div className={`${st.product_shipping__sotck}`}>
                                            <RiShieldCheckFill className={`${st.checkfill_icon}`}/>
                                            <span>In sotcks</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${st.product_main__info__sub}`}>
                                    <div className={`${st.product_price}`}>
                                        <div className={`${st.product_new__price}`}>$15,63</div>
                                        <div className={`${st.product_old__price}`}>$16,99</div>
                                        <div className={`${st.product_discount}`}>2%</div>
                                    </div>
                                    <div className={`${st.product_shopping}`}>
                                        {/* mahsulot soni */}
                                        <button className={`${st.product_add__card}`}>
                                            <AiOutlineShoppingCart className={`${st.shopcart_icon}`}/>
                                            <span>Savatga qo'shish</span>
                                        </button>
                                        <button className={`${st.product_like}`}>
                                            <FaRegHeart className={`${st.heart_icon2}`}/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* newclass */}
                        <div className={`${st.product_other__info}`}>
                            <div className={`${st.product_details__reviews}`}>
                                <div className={`${st.product_details}`}>
                                    <a href="#" className={`${st.product_details__title}`}>Details Product</a>
                                    <a href="#" className={`${st.customer_reviews__title}`}>Customer Reviews</a>
                                    <table className={`${st.product_details__table}`}>
                                        <tr>
                                            <th>Book Title</th>
                                            <td>All news Good</td>
                                        </tr>
                                        <tr>
                                            <th>Book Title</th>
                                            <td>All news Good</td>
                                        </tr>
                                        <tr>
                                            <th>Book Title</th>
                                            <td>All news Good</td>
                                        </tr>
                                        <tr>
                                            <th>Book Title</th>
                                            <td>All news Good</td>
                                        </tr>
                                        <tr>
                                            <th>Book Title</th>
                                            <td>All news Good</td>
                                        </tr>
                                        <tr>
                                            <th>Book Title</th>
                                            <td>All news Good</td>
                                        </tr>
                                        <tr>
                                            <th>Book Title</th>
                                            <td>All news Good</td>
                                        </tr>
                                        <tr>
                                            <th>Book Title</th>
                                            <td>All news Good</td>
                                        </tr>
                                    </table>
                                </div>
                                {/* bu yerda kommentariya bo'limi bo'ladi */}
                            </div>
                            <div className={`${st.related_products}`}>
                                <div className={`${st.related_products__title}`}>Related Products</div>
                                <div className={`${st.related_product__box}`}>
                                    <div className={`${st.related_product__img}`}>
                                        {/* rasm uchun joy */}
                                    </div>
                                    <div className={`${st.related_product__item}`}>
                                        <div className={`${st.related_product__name}`}>Terrible Madness</div>
                                        <div className={`${st.related_product__rating}`}>
                                            <FaStar className={`${st.star_icon}`}/> 
                                            <span>4.7</span>
                                        </div>
                                        <div className={`${st.related_product__price}`}>
                                            <span className={`${st.related_product__new__price}`}>$45.4</span>
                                            <span className={`${st.related_product__old__price}`}>$98.4</span>
                                        </div>
                                        <button className={`${st.related_product__add__card}`}>
                                            <AiOutlineShoppingCart className={`${st.shopcart_icon}`}/>
                                            <span>Savatga qo'shish</span>
                                        </button>
                                    </div>
                                </div>
                                <div className={`${st.related_product__box}`}>
                                    <div className={`${st.related_product__img}`}>
                                        {/* rasm uchun joy */}
                                    </div>
                                    <div className={`${st.related_product__item}`}>
                                        <div className={`${st.related_product__name}`}>Terrible Madness</div>
                                        <div className={`${st.related_product__rating}`}>
                                            <FaStar className={`${st.star_icon}`}/> 
                                            <span>4.7</span>
                                        </div>
                                        <div className={`${st.related_product__price}`}>
                                            <span className={`${st.related_product__new__price}`}>$45.4</span>
                                            <span className={`${st.related_product__old__price}`}>$98.4</span>
                                        </div>
                                        <button className={`${st.related_product__add__card}`}>
                                            <AiOutlineShoppingCart className={`${st.shopcart_icon}`}/>
                                            <span>Savatga qo'shish</span>
                                        </button>
                                    </div>
                                </div>
                                <div className={`${st.related_product__box}`}>
                                    <div className={`${st.related_product__img}`}>
                                        {/* rasm uchun joy */}
                                    </div>
                                    <div className={`${st.related_product__item}`}>
                                        <div className={`${st.related_product__name}`}>Terrible Madness</div>
                                        <div className={`${st.related_product__rating}`}>
                                            <FaStar className={`${st.star_icon}`}/> 
                                            <span>4.7</span>
                                        </div>
                                        <div className={`${st.related_product__price}`}>
                                            <span className={`${st.related_product__new__price}`}>$45.4</span>
                                            <span className={`${st.related_product__old__price}`}>$98.4</span>
                                        </div>
                                        <button className={`${st.related_product__add__card}`}>
                                            <AiOutlineShoppingCart className={`${st.shopcart_icon}`}/>
                                            <span>Savatga qo'shish</span>
                                        </button>
                                    </div>
                                </div>
                                <button className={`${st.related_products__view__more}`}>View More</button>
                            </div>
                        </div>
                        <div className={`${st.site_advantages}`}>
                            <div className={`${st.site_advantages__item}`}>
                                <div className={`${st.site_advantages__item__wrapper}`}>
                                    <FaBolt className={`${st.site_advantages__item__icon}`}/>
                                </div>
                                <div>
                                    <div className={`${st.site_advantages__item__title}`}>Quick Delivery</div>
                                    <div className={`${st.site_advantages__item__text}`}>lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet</div>
                                </div>
                            </div>
                            <div className={`${st.site_advantages__item}`}>
                                <div className={`${st.site_advantages__item__wrapper}`}>
                                    <RiShieldCheckFill className={`${st.site_advantages__item__icon}`}/>
                                </div>
                                <div>
                                    <div className={`${st.site_advantages__item__title}`}>Quick Delivery</div>
                                    <div className={`${st.site_advantages__item__text}`}>lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet</div>
                                </div>
                            </div>
                            <div className={`${st.site_advantages__item}`}>
                                <div className={`${st.site_advantages__item__wrapper}`}>
                                    <FaRegThumbsUp className={`${st.site_advantages__item__icon}`}/>
                                </div>
                                <div>
                                    <div className={`${st.site_advantages__item__title}`}>Quick Delivery</div>
                                    <div className={`${st.site_advantages__item__text}`}>lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet</div>
                                </div>
                            </div>
                            <div className={`${st.site_advantages__item}`}>
                                <div className={`${st.site_advantages__item__wrapper}`}>
                                    <FaStar className={`${st.site_advantages__item__icon}`}/>
                                </div>
                                <div>
                                    <div className={`${st.site_advantages__item__title}`}>Quick Delivery</div>
                                    <div className={`${st.site_advantages__item__text}`}>lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet</div>
                                </div>
                            </div>
                        </div>
                        {/* <div className={`${st.product_sale}`}>
                            <div className={`${st.product_sale__title}`}>Product on sale</div>

                        </div> */}
                    </div>
                </div>
            </>
        );
    }
}
 
export default Product;