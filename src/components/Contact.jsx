import React from 'react'
import style from './Contact.module.css'
import iglogo from '../assets/image/icons8-instagram-50 white.png'
import facebooklogo from'../assets/image/icons8-facebook-50 white.png'
import gmailogo from'../assets/image/icons8-gmail-50.png'
import githublogo from'../assets/image/icons8-github-50.png'
const Contact = () => {
  function Iglink() {
    window.open('https://www.instagram.com/gungungungungungun_/');
  }
    function Fblink() {
    window.open('https://www.facebook.com/supanut.ongcharoensuk');
  }
    function Gmaillink() {
    window.open('mailto:gunnersupanut@gmail.com');
  }
    function Githubink() {
    window.open('https://github.com/gunsupm');
  }
  return (
    <>
      <section id='contact' className={style.contactsec}>
        <div className={style.content}>
          <div className={style.header}>
          <h1 >
            Contact
          </h1>
               </div>
          <div className={style.contact}>
            <div className={style.ig}><img onClick={Iglink} src={iglogo} alt="Instragram logo" /> <p onClick={Iglink} >Instragram</p></div>
            <div className={style.facebook}><img onClick={Fblink} src={facebooklogo} alt="Facebooklogo" /><p onClick={Fblink}>Facebook</p></div>
            <div className={style.gmail}><img onClick={Gmaillink} src={gmailogo} alt="Facebooklogo" /><p onClick={Gmaillink}>Gmail</p></div>
            <div className={style.github}><img onClick={Githubink} src={githublogo} alt="Facebooklogo" /><p onClick={Githubink}>Git Hub</p></div>
          </div>
          </div>
      </section>
    </>
  )
}

export default Contact
