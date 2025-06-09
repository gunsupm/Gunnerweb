import React from 'react'
import style from './Skill.module.css';
const Skill = ({currentSectionColor}) => {
  return (
    <>
    <section id='skill' className={style.skillsec} style={{ backgroundColor:currentSectionColor }}>
    
    <div className={style.content}>
      <div className={style.head}>
        <h1>skill</h1>
      </div>
      <div className={style.box1}>
        <h2>Technical Skills</h2>
        <div className={style.skillTopics}>
        <div className={style.skillcolumnitem}>
        <p>Programming Languages</p>
        <ul>
          <li>Python</li>
          <li>C#  </li>
          <li>PHP </li>
          <li>Kotlin </li>
          <li>C++ </li>
        </ul>
        </div> 
       <div className={style.skillcolumnitem}>
         <p >  Web Development</p>
          <ul>
          <li>HTML CSS JavaScript</li>
          <li>CSS</li>
          <li>React.js</li>
          <li>Responsive Design</li>
        </ul>
         </div>
        <div className={style.skillcolumnitem}>
          <p>  DataBase</p>
           <ul>
          <li>MySQL</li>
          <li>Firebase</li>
          <li>SQLite</li>
        </ul>
          </div>
          </div>
        
      {/* Box2 */}
      </div>
         <div className={style.box2}>
         <h2>Tool</h2>
                 <div className={style.skillTopics}>
        <div className={style.skillcolumnitem}>
        <p>Version Control</p>
        <ul>
          <li>Git</li>
          <li>Github</li>
        </ul>
        </div> 
       <div className={style.skillcolumnitem}>
         <p >Code Editor</p>
          <ul>
          <li>VS Code </li>
          <li>Android Studio</li>
          <li>Visual Basic</li>
        </ul>
         </div>
        <div className={style.skillcolumnitem}>
          <p>Productivity & Design Tools</p>
           <ul>
          <li>Figma</li>
          <li>Canva</li>
          <li>Microsoft Office Suite</li>
        </ul>
          </div>
          </div>
         </div>

         {/* Box3 */}
            <div className={style.box3}>
              <h2>Soft Skills</h2>
                 <div className={style.skillTopics}>
        <div className={style.skillcolumnitem}>
        <ul>
          <li>Problem-Solving</li>
          <li>Critical Thinking</li>
           <li>Time management</li>
        </ul>
        </div> 
       <div className={style.skillcolumnitem}>
          <ul>
          <li>Teamwork</li>
          <li>Communication</li>
           <li>Curiosity and lifelong learning </li>
        </ul>
         </div>
        <div className={style.skillcolumnitem}>
           <ul>
          <li>Adaptability</li>
          <li>Patience</li>
        </ul>
          </div>
          </div>
        </div>
    </div>
    </section>
    </>
  )
}

export default Skill
