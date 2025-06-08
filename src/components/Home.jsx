import React from 'react'
import style from './Home.module.css'
import labtoploco from '../assets/image/Labtop icon.png'
const Home = ({currentSectionColor, scrollToSection}) =>{
  return (
    <>
    <section id='home' className={style.homesec}  style={{ backgroundColor:currentSectionColor }}>
    <div className={style.content}>
      <div className={style.font}>
      <h1>Hello!</h1>
      <p>I am gunner</p>
      <h2>Welcome to my website</h2>
      <a href="#about">
         <span>let's start</span>
        </a>
      </div>
      <div className={style.img}>
      <img src={labtoploco} alt="Labtop locos" />
      </div>
      </div>  
    </section>
    </>
  )
}

export default Home
