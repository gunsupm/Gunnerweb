import React from 'react'
import style from './Skill.module.css';
const Skill = ({currentSectionColor}) => {
  return (
    <>
    <section id='skill' className={style.skillsec} style={{ backgroundColor:currentSectionColor }}></section>
    </>
  )
}

export default Skill
