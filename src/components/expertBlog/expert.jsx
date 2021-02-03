import React, { Component } from 'react';
import st from './expert.module.css';

class ExpertBlog extends Component {
    render() { 
        return ( 
            <>
               <div className={`${st.experts_blog}`}>
                    <div className={`${st.site_container}`}>
                        <h2 className={`${st.section_title}`}>Ekspertlar blogi</h2>
                        <div className={`${st.experts_news}`}>
                            <div className={`${st.main_experts__news}`}>
                                <div className={`${st.main_experts__news__mask}`}>
                                    {/* rasm uchun joy */}
                                    <div className={`${st.main_experts__news__title}`}>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolores in, non porro quia
                                        repudiandae?
                                       </div>
                                </div>
                            </div>
                            <div className={`${st.experts_news__wrapper}`}>
                                <div className={`${st.experts_new}`}>
                                    <div className={`${st.experts_new__img}`}>

                                    </div>
                                    <div className={`${st.experts_new__content}`}>
                                        <span className={`${st.experts_new__date}`}>23 yanvar 09:00</span>
                                        <span className={`${st.experts_new__type}`}>Biznes</span> 
                                    <p className={`${st.experts_new__text}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad architecto et
                                        explicabo facilis fugiat molestias nobis nulla quisquam unde?</p>
                                    </div>
                                </div>
                                <div className={`${st.experts_new}`}>
                                    <div className={`${st.experts_new__img}`}>

                                    </div>
                                    <div className={`${st.experts_new__content}`}>
                                        <span className={`${st.experts_new__date}`}>23 yanvar 09:00</span>
                                        <span className={`${st.experts_new__type}`}>Biznes</span> 
                                    <p className={`${st.experts_new__text}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad architecto et
                                        explicabo facilis fugiat molestias nobis nulla quisquam unde?</p>
                                    </div>
                                </div>
                                <div className={`${st.experts_new}`}>
                                    <div className={`${st.experts_new__img}`}>

                                    </div>
                                    <div className={`${st.experts_new__content}`}>
                                        <span className={`${st.experts_new__date}`}>23 yanvar 09:00</span>
                                        <span className={`${st.experts_new__type}`}>Biznes</span> 
                                    <p className={`${st.experts_new__text}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad architecto et
                                        explicabo facilis fugiat molestias nobis nulla quisquam unde?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </>
         );
    }
}
 
export default ExpertBlog;


