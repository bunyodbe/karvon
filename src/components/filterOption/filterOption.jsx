import React, { Component } from 'react';
import st from './filterOption.module.css';
import { FaRegHeart, FaStar, FaCard } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import 'antd/dist/antd.css';
import { Slider } from 'antd';

function onChange(value) {
    console.log('onChange: ', value);
  }
  
  function onAfterChange(value) {
    console.log('onAfterChange: ', value);
  }



class FilterOption extends Component {
    render() { 
        return (  
            <>
                <div className={`${st.filter_section}`}>
                    <div className={`${st.filter_option}`}>
                        <h2 className={`${st.filter_title}`}>Filter</h2>  
                        <div className={`${st.categories_box}`}>
                            <h3 className={`${st.categories_box__title}`}>Bo'limlar</h3>
                            <ul className={`${st.categories_box__list}`}> 
                                <li className={`${st.categories_box__list__item}`}> 
                                    <span>» Lorem, ipsum dolor</span>
                                    <ul className={`${st.categories_inner__list}`}>
                                        <li className={`${st.categories_inner__list__item}`}>
                                            Lorem, ipsum.
                                        </li>
                                        <li className={`${st.categories_inner__list__item}`}>
                                            Lorem, ipsum.
                                        </li>
                                        <li className={`${st.categories_inner__list__item}`}>
                                            Lorem, ipsum.
                                        </li>
                                    </ul>
                                </li>
                                <li className={`${st.categories_box__list__item}`}> 
                                    <span>» Lorem, ipsum dolor</span>
                                    <ul className={`${st.categories_inner__list}`}>
                                        <li className={`${st.categories_inner__list__item}`}>
                                            Lorem, ipsum.
                                        </li>
                                        <li className={`${st.categories_inner__list__item}`}>
                                            Lorem, ipsum.
                                        </li>
                                        <li className={`${st.categories_inner__list__item}`}>
                                            Lorem, ipsum.
                                        </li>
                                    </ul>
                                </li>
                                <li className={`${st.categories_box__list__item}`}> 
                                    <span>» Lorem, ipsum dolor</span>
                                    <ul className={`${st.categories_inner__list}`}>
                                        <li className={`${st.categories_inner__list__item}`}>
                                            Lorem, ipsum.
                                        </li>
                                        <li className={`${st.categories_inner__list__item}`}>
                                            Lorem, ipsum.
                                        </li>
                                        <li className={`${st.categories_inner__list__item}`}>
                                            Lorem, ipsum.
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className={`${st.filter_categories_checkbtn}`}>

                        </div>
                        <div className={`${st.price_range}`}>
                            <h4>Price Range</h4>
                         <Slider
                            range
                            step={10}
                            tooltipPlacement = 'top'
                            max = {1000000}
                            defaultValue={[200, 500]}
                            onChange={onChange}
                            onAfterChange={onAfterChange}
                        />
                        </div>
                    </div>
                    <div className={`${st.secondary_filter}`}>
                        <h2 className={`${st.filter_title}`}>Product Name</h2>
                        <div className={`${st.secondary_filter__box}`}>
                            <div>
                                <a className={`${st.secondary_filter__link} ${st.active_link}`} href="#">Mahsulotlar</a>
                                <a className={`${st.secondary_filter__link}`} href="#">Do'konlar</a>
                            </div>
                            <div className={`${st.secondary_filter__sort}`}>

                            
                            </div>
                        </div>
                        <div className={`${st.filtered_products__wrapper}`}>
                            <div className={`${st.filtered_product__box}`}>
                                <div className={`${st.filtered_product__box__img}`}>
                                {/* rasm uchun joy */}
                                </div>
                                <div className={`${st.filtered_product__box__content}`}>
                                    <h4>Lorem, ipsum.</h4>
                                    <div className={`${st.star_list}`}>
                                            <FaStar className={`${st.star_icon}`}/>
                                            <FaStar className={`${st.star_icon}`}/>
                                            <FaStar className={`${st.star_icon}`}/>
                                            <FaStar className={`${st.star_icon}`}/>
                                            <FaStar className={`${st.star_icon}`}/>
                                    </div>
                                    <div className={`${st.price_and_shop}`}>
                                        <span className={`${st.product_price}`}>$ 49.99</span>
                                        <div className={`${st.product_add__card}`}>
                                            <AiOutlineShoppingCart className={`${st.shopcart_icon}`}/>
                                            <span>Savatga qo'shish</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${st.heart_icon__wrapper}`}>
                                    <FaRegHeart className={`${st.heart_icon}`}/>
                                </div>
                            </div> 
                            <div className={`${st.filtered_product__box}`}>
                                <div className={`${st.filtered_product__box__img}`}>
                                {/* rasm uchun joy */}
                                </div>
                                <div className={`${st.filtered_product__box__content}`}>
                                    <h4>Lorem, ipsum.</h4>
                                    <div className={`${st.star_list}`}>
                                            <FaStar className={`${st.star_icon}`}/>
                                            <FaStar className={`${st.star_icon}`}/>
                                            <FaStar className={`${st.star_icon}`}/>
                                            <FaStar className={`${st.star_icon}`}/>
                                            <FaStar className={`${st.star_icon}`}/>
                                    </div>
                                    <div className={`${st.price_and_shop}`}>
                                        <span className={`${st.product_price}`}>$ 49.99</span>
                                        <div className={`${st.product_add__card}`}>
                                            <AiOutlineShoppingCart className={`${st.shopcart_icon}`}/>
                                            <span>Savatga qo'shish</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${st.heart_icon__wrapper}`}>
                                    <FaRegHeart className={`${st.heart_icon}`}/>
                                </div>
                            </div> 
                            <div className={`${st.filtered_product__box}`}>
                                <div className={`${st.filtered_product__box__img}`}>
                                {/* rasm uchun joy */}
                                </div>
                                <div className={`${st.filtered_product__box__content}`}>
                                    <h4>Lorem, ipsum.</h4>
                                    <div className={`${st.star_list}`}>
                                            <FaStar className={`${st.star_icon}`}/>
                                            <FaStar className={`${st.star_icon}`}/>
                                            <FaStar className={`${st.star_icon}`}/>
                                            <FaStar className={`${st.star_icon}`}/>
                                            <FaStar className={`${st.star_icon}`}/>
                                    </div>
                                    <div className={`${st.price_and_shop}`}>
                                        <span className={`${st.product_price}`}>$ 49.99</span>
                                        <div className={`${st.product_add__card}`}>
                                            <AiOutlineShoppingCart className={`${st.shopcart_icon}`}/>
                                            <span>Savatga qo'shish</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${st.heart_icon__wrapper}`}>
                                    <FaRegHeart className={`${st.heart_icon}`}/>
                                </div>
                            </div> 
                            <div className={`${st.filtered_product__box}`}>
                                <div className={`${st.filtered_product__box__img}`}>
                                {/* rasm uchun joy */}
                                </div>
                                <div className={`${st.filtered_product__box__content}`}>
                                    <h4>Lorem, ipsum.</h4>
                                    <div className={`${st.star_list}`}>
                                            <FaStar className={`${st.star_icon}`}/>
                                            <FaStar className={`${st.star_icon}`}/>
                                            <FaStar className={`${st.star_icon}`}/>
                                            <FaStar className={`${st.star_icon}`}/>
                                            <FaStar className={`${st.star_icon}`}/>
                                    </div>
                                    <div className={`${st.price_and_shop}`}>
                                        <span className={`${st.product_price}`}>$ 49.99</span>
                                        <div className={`${st.product_add__card}`}>
                                            <AiOutlineShoppingCart className={`${st.shopcart_icon}`}/>
                                            <span>Savatga qo'shish</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${st.heart_icon__wrapper}`}>
                                    <FaRegHeart className={`${st.heart_icon}`}/>
                                </div>
                            </div>        
                        </div>
                    </div>
                </div>
               
            </>
        );
    }
}
 
export default FilterOption;