import React, { Component } from 'react';
import st from './filterOption.module.css';
import { FaThLarge, FaThList} from "react-icons/fa";
import 'antd/dist/antd.css';
import { Slider } from 'antd';
import FilteredProducts from "../filteredProducts/filteredProducts";
import { Pagination } from 'antd';

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
                            <h3>Shop By Category</h3>
                            <ul>
                                <li>
                                    <input type="checkbox" id="lorem1"/>
                                    <label for="lorem1">Lorem, ipsum 1</label>
                                </li>
                                <li>
                                    <input type="checkbox" id="lorem2"/>
                                    <label for="lorem2">Lorem, ipsum 2</label>
                                </li>
                                <li>
                                    <input type="checkbox" id="lorem3"/>
                                    <label for="lorem3">Lorem, ipsum 3</label>
                                </li>
                                <li>
                                    <input type="checkbox" id="lorem4"/>
                                    <label for="lorem4">Lorem, ipsum 4</label>
                                </li>
                                <li>
                                    <input type="checkbox" id="lorem5"/>
                                    <label for="lorem5">Lorem, ipsum 5</label>
                                </li>
                            </ul>      
                        </div>
                        <div className={`${st.price_range}`}>
                            <h3>Price Range</h3>
                         <Slider
                            range
                            step={10000}
                            tooltipPlacement = 'top'
                            max = {1000000}
                            defaultValue={[200000, 500000]}
                            onChange={onChange}
                            onAfterChange={onAfterChange}
                        />
                        </div>
                        <div className={`${st.search_and__reset__btn}`}>
                            <button className={`${st.filter_search__btn}`}>Refine Search</button>
                            <button className={`${st.filter_reset__btn}`}>Reset Filter</button>
                        </div>
                    </div>
                    <div className={`${st.secondary_filter}`}>
                        <h2 className={`${st.filter_title}`}>Product Name</h2>
                        <div className={`${st.secondary_filter__box}`}>
                            <div>
                                <a className={`${st.secondary_filter__link} ${st.active_link}`} href="#">Mahsulotlar</a>
                                <a className={`${st.secondary_filter__link}`} href="#">Do'konlar</a>
                            </div>
                            <div>
                            <div className={`${st.secondary_filter__view__type}`}>
                            <FaThList className={`${st.view_list__icon}`}/>
                            <FaThLarge className={`${st.view_square__icon} ${st.active_icon}`}/>
                            </div>
                            </div>
                        </div>
                        <FilteredProducts/>
                    </div>
                    <div className={`${st.products_pagenations}`}>
                        <Pagination defaultCurrent={1} total={50} />
                    </div>
                </div>
               
            </>
        );
    }
}
 
export default FilterOption;