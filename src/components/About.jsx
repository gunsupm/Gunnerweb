import React from 'react'
import style from './About.module.css'
import me from '../assets/image/menobg.png'
const  About =({currentSectionColor}) =>{
  return (
    <>
       <section id='about' className={style.aboutcontainer} style={{ backgroundColor:currentSectionColor }}>
       <div className={style.content}>
        <div className={style.pic}>
          <img src={me} alt="mypictiure" />
        </div>
        <div className={style.text}>
        <h1>About Me</h1>
        <p className={style.name}>Supanut <span>Ongcharoensuk</span></p>
        <h2>Gunner</h2>
        <p className={style.info}>Hi! I'm a Computer Science student with <br />a strong passion for becoming a developer. <br />
        In my free time, I develop my coding skills. <br />
        I truly believe that learning and growing never stop. <br />
        I get excited by the new possibilities <br />
        that software development offers.</p>
        </div>
       </div>
       </section>
    </>
  )
}

export default About
