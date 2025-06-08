import { useState,useEffect } from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Skill from './components/Skill'
import Project from './components/Project'
import Contact from './components/Contact'
import './App.css'

function App() {
    const navLinks = [
    { name: 'Home', href: '#home', id: 'home',color:'#FFB6C1' }, 
    { name: 'About', href: '#about', id: 'about',color:'#FDC3CB'  },
    { name: 'Skill', href: '#skill', id: 'skill',color:'#FBCFD6'  },
    { name: 'Project', href: '#project', id: 'project',color:'#F9DCE0'  },
    { name: 'Contact', href: '#contact', id: 'contact',color:'#F9DCE0' },
  ];

  //เก็บค่า id section
  const [activeSectionId, setActiveSectionId] = useState(navLinks[0].id); //stage กำหนดค่าเริ่มต้นเป็น 'home' หรือ ID ของ Section แรก
  const [currentSectionColor, setCurrentSectionColor] = useState(navLinks[0].color); //stage เก็บสีพื้นหลังปัจจุบัน

  //Nav link a and bg จะเปลี่ยนสีไปตาม Section นั้น
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
      setActiveSectionId(id);  // เมื่อคลิกให้ Active เลย 
    const selectedLink = navLinks.find(link => link.id === id);
      if (selectedLink) {
                setCurrentSectionColor(selectedLink.color);
            }
    }
  };

  useEffect(() => {
    const sections = navLinks.map(link => document.getElementById(link.id)); 

    const observer = new IntersectionObserver(     // สร้าง IntersectionObserver
      entries => {
        let currentVisibleSection = null; 
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            currentVisibleSection = entry.target.id;
          }
        });

        if (currentVisibleSection && currentVisibleSection !== activeSectionId) {
          setActiveSectionId(currentVisibleSection); // อัปเดต state activeSectionI
          const activeLink = navLinks.find(link => link.id === currentVisibleSection);
          if (activeLink) {
                        setCurrentSectionColor(activeLink.color);//อัปเดคาีพื้นหลัง
                
        }
      }
      },
      { threshold: 0.5 } // กำหนดว่า Section ต้องอยู่ในจอ 70% ถึงจะนับว่า Intersecting
    );

    sections.forEach(sec => {
      if (sec) { // ตรวจสอบว่า Element นั้นมีอยู่จริง (กัน null error)
        observer.observe(sec);
      }
    });
 return () => {
      sections.forEach(sec => {
        if (sec) {
          observer.unobserve(sec);
        }
      });
    };
  }, [navLinks, activeSectionId]); // Dependency array: ให้ useEffect ทำงานใหม่เมื่อ navLinks หรือ activeSectionId เปลี่ยน
return(
  <>
  <Nav 
    activeSectionId={activeSectionId}
    scrollToSection={scrollToSection}
    navLinks={navLinks}
  />
  <Home 
    id='home'
    currentSectionColor={currentSectionColor}
    activeSectionId={activeSectionId}
    scrollToSection={scrollToSection}
    navLinks={navLinks}
  />
  <About 
  id='about' 
  currentSectionColor={currentSectionColor}
  />
  <Skill 
  id='skill'
  currentSectionColor={currentSectionColor}
  />
  <Project 
  id='project'
  currentSectionColor={currentSectionColor}
  />
  <Contact 
  id='contact'
  />
  </>
)
}

export default App
