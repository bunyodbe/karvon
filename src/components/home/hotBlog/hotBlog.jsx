import React, { Component, createContext } from 'react';
import st from './hotBlog.module.css';
class HotBlog extends Component {
    state = {  }
    render() { 
        return (  
            <>
                <div className={`${st.hot_blog}`}>
                    <div className={`${st.site_container}`}>
                        <h2 className={`${st.section_title}`}>Qaynoq blog</h2>
                        <div className={`${st.hot_news}`}>
                            <div className={`${st.latest_hot__news}`}>
                                <div className={`${st.latest_new}`}>
                                    <div className={`${st.latest_header}`}>
                                        <span className={`${st.latest_new__date}`}>23 yanvar 09:00</span>
                                        <span className={`${st.latest_new__type}`}>Biznes</span>
                                        <p className={`${st.latest_new__text}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad architecto et
                                        explicabo facilis fugiat molestias nobis nulla quisquam unde?</p>
                                    </div>
                                </div>
                                <div className={`${st.latest_new}`}>
                                    <div className={`${st.latest_header}`}>
                                        <span className={`${st.latest_new__date}`}>23 yanvar 09:00</span>
                                        <span className={`${st.latest_new__type}`}>Biznes</span>
                                        <p className={`${st.latest_new__text}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad architecto et
                                        explicabo facilis fugiat molestias nobis nulla quisquam unde?</p>
                                    </div>
                                </div>
                                <div className={`${st.latest_new}`}>
                                    <div className={`${st.latest_header}`}>
                                        <span className={`${st.latest_new__date}`}>23 yanvar 09:00</span>
                                        <span className={`${st.latest_new__type}`}>Biznes</span>
                                        <p className={`${st.latest_new__text}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad architecto et
                                        explicabo facilis fugiat molestias nobis nulla quisquam unde?</p>
                                    </div>
                                </div>
                                <div className={`${st.latest_new}`}>
                                    <div className={`${st.latest_header}`}>
                                        <span className={`${st.latest_new__date}`}>23 yanvar 09:00</span>
                                        <span className={`${st.latest_new__type}`}>Biznes</span>
                                        <p className={`${st.latest_new__text}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad architecto et
                                        explicabo facilis fugiat molestias nobis nulla quisquam unde?</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`${st.main_hot__news}`}>
                                <div className={`${st.main_hot__news__mask}`}>
                                    {/* rasm uchun joy */}
                                    <div className={`${st.main_hot__news__title}`}>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolores in, non porro quia
                                        repudiandae?
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
 
export default HotBlog;