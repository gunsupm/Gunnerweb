import React from 'react'
import style from './project.module.css'
import FirstWeb from '../assets/image/MyfirstWeb.png'
import PersonalWeb from '../assets/image/PersonalWeb.png'
const Project = ({currentSectionColor}) => {
  function onmyfirstwebsite(){
    window.open('https://gunsupm.github.io/My-Portfolio/#About');
  }
  return (
    <>
      <section id='project' className={style.projectsec} style={{ backgroundColor:currentSectionColor }}>
          <div className={style.content}>
            <h1 className={style.header}>Project</h1>
            <div className={style.projecttopics}>

              {/* project 1 */}
              <div className={style.box} onClick={onmyfirstwebsite}>
                <div className={style.box} onClick={onmyfirstwebsite}>
              <div className={style.projectdetail}>
                <div className={style.projectimg}>
                  <img  src={FirstWeb } alt="My First Website.png" />
                </div>
                <h2>First Personal Website</h2>
                <p>First time writing web code
                  <br/>By HTML CSS JS
                </p>
              </div>
              </div>
              </div>
              
              {/* Project 2 */}
              <div className={style.box}>
                 <div className={style.box} onClick={null}>
              <div className={style.projectdetail}>
                <div className={style.projectimg}>
                  <img  src={PersonalWeb} alt="My First Website.png" />
                </div>
                <h2>Personal Website V.2
                </h2>
                <p>My Personal Website 
                  <br/>By React
                </p>
              </div>
              </div>
              </div>
              
                {/* Project 2 */}
              <div className={style.box}>
               <div className={style.box}>
                 <div className={style.box} onClick={null}>
              <div className={style.projectdetail}>
                <div className={style.projectimg}>
                </div>
                <h2>Coming Soon</h2>
                <p>The future is approaching 
                  <br/>Currently under development
                </p>
              </div>
              </div>
              </div>
              </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default Project
