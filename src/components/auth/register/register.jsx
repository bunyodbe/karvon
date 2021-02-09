import React, { Component } from "react";
import st from "./register.module.css";
import { FaUserTie, FaHandshake } from "react-icons/fa";

class Register extends Component {
  render() {
    return (
      <>
        <div className={`${st.register_section}`}>
          <div className={`${st.site_container}`}>
            <h1>Ro'yxatdan o'tish</h1>
            <p>Kategoriyani tanlang</p>
            <div className={`${st.register_category}`}>
              <div
                className={`${st.active_register_category} ${st.personal_cabinet}`}
              >
                <FaUserTie className={`${st.userTie_icon} ${st.reg_icon}`} />
                <span>Shaxsiy kabinet</span>
              </div>
              <div className={`${st.for_bizness}`}>
                <FaHandshake
                  className={`${st.handShake_icon} ${st.reg_icon}`}
                />
                <span>Biznes uchun</span>
              </div>
            </div>
            <div className={`${st.register_box}`}>
              <form>
                <div className={`${st.register_box__item}`}>
                  <label for="userName">Foydalanuvchi ismi</label>
                  <input
                    type="text"
                    id="userName"
                    placeholder="Ismingiz"
                    required
                  />
                </div>
                <div className={`${st.register_box__item}`}>
                  <label for="userMail">Email manzilingiz</label>
                  <input
                    type="mail"
                    id="userMail"
                    placeholder="E-mail"
                    required
                  />
                </div>
                <div className={`${st.register_box__item}`}>
                  <label for="userTel">Telefon raqam</label>
                  <input
                    type="number"
                    id="userTel"
                    placeholder="+998XXZZZZZZZ"
                    required
                  />
                </div>
                <div className={`${st.register_box__item}`}>
                  <label for="userPas">Parol</label>
                  <input
                    type="password"
                    id="userPas"
                    placeholder="Parol"
                    required
                  />
                </div>
                <div className={`${st.register_box__item}`}>
                  <label for="userPasRes">Parolni tasdiqlang</label>
                  <input
                    type="password"
                    id="userPasRes"
                    placeholder="Parol"
                    required
                  />
                </div>
                <div className={`${st.agreeCheck_item}`}>
                  <input type="checkbox" id="agreeCheck" />
                  <label for="agreeCheck">
                    Saytdan foydalanish shartlariga roziman
                  </label>
                </div>
                <button className={`${st.register_btn}`}>
                  Ro'yxatdan o'tish
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Register;
