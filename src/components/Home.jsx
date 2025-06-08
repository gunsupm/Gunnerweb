import React from 'react'
import style from './Home.module.css'
const Home = ({currentSectionColor}) =>{
  return (
    <>
    <section id='home' className={style.homesec}  style={{ backgroundColor:currentSectionColor }}></section>
    </>
  )
}

export default Home
