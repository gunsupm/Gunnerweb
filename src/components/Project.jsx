import React from 'react'
import style from './project.module.css'
const Project = ({currentSectionColor}) => {
  return (
    <>
      <section id='project' className={style.projectsec} style={{ backgroundColor:currentSectionColor }}>
          <div className={style.content}>
            <h1 className={style.header}>Project</h1>
          </div>
      </section>
    </>
  )
}

export default Project
