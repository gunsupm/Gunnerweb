import React from 'react'
import style from './project.module.css'
const Project = ({currentSectionColor}) => {
  return (
    <>
      <section id='project' className={style.projectsec} style={{ backgroundColor:currentSectionColor }}></section>
    </>
  )
}

export default Project
