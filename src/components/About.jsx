import React from 'react'
import style from './About.module.css'
const  About =({currentSectionColor}) =>{
  return (
    <>
       <section id='about' className={style.aboutcontainer} style={{ backgroundColor:currentSectionColor }}> </section>
    </>
  )
}

export default About
