import React, { Component } from 'react';
import st from './filterOption.module.css'

class FilterOption extends Component {
    render() { 
        return (  
            <>
                <div className={`${st.filter_option}`}>
                    <div className={`${st.site_container}`}>
                        <h2 className={`${st.filter_title}`}>Filter</h2>  
                        <div className={`${st.categories_box}`}>
                            <h3 className={`${st.categories_box__title}`}>Bo'limlar</h3>
                            <ul className={`${st.categories_list}`}>
                                <li className={`${st.categories_list__item}`}>Lorem, ipsum.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
 
export default FilterOption;