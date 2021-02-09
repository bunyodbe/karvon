import React, { Component } from 'react';
import st from './signIn.module.css';

class SignIn extends Component {
    render() { 
        return ( 
            <>
                <div className={`${st.signIn_modal__wrapper}`}>
                    <div className={`${st.signIn_modal__box}`}>
                        <button className={`${st.modal_close__btn}`}>
                            x
                        </button>
                        <div className={`${st.signIn_modal__title}`}>Tizimga kirish</div>
                        <form className={`${st.signIn_form}`}>
                            <label htmlFor="telNumber">Telefon Raqami</label>
                            <input type="number" id="telNumber" placeholder="+998XXZZZZZZZ" required/>
                            <label htmlFor="userPassword">Parol</label>
                            <input type="password" id="userPassword" placeholder="Parolni kiriting" required/>
                            <button type="submit" className={`${st.signIn_submit__btn}`}>Kirish</button>
                        </form>
                        <div className={`${st.signIn_modal__content}`}>
                            <div>
                                <span>Sizda akkaunt yo'qmi?</span>
                                <a className={`${st.signUp_link}`} href="#">Hozir ro'yxatdan o'ting</a>
                            </div>
                            <div>
                                <a className={`${st.forget_password__link}`} href="#">Parolni unutdingizmi?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
         );
    }
}
 
export default SignIn;