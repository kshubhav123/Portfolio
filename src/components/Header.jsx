import React, { useContext, useState } from 'react'
import '../assets/css/header.css'
import { ThemeContext } from '../context/ThemeContext'
import { useScroll } from '../context/ScrollProvider'

const ThemeSwitcher = ({ theme, toggleTheme }) => {
    return (
        <div className=''>
            <button className={`${theme === "light" ? "light-icon-mode" : "dark-icon-mode"} icon-button`} onClick={() => toggleTheme(prevTheme => prevTheme === "light" ? "dark" : "light")}>
                {theme === "light" ? <i class="bi bi-moon-fill"></i> : <i class="bi bi-brightness-low-fill"></i>}
            </button>
        </div>
    )
}

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const [activeClass, setActiveClass] = useState("home")

    const { homeRef,aboutref, skillsRef, educationRef, experienceRef,hiremeref, scrollToEvent } = useScroll();

    const handleSelect = (active, ref) => {
        scrollToEvent(ref)
        setActiveClass(active)
    }


    return (
        <div className={`d-flex flex-lg-row flex-column justify-content-lg-around align-items-center shadow-sm py-2 ${theme === "dark" ? "dark-theme" : "light-theme"}`}>
            <div className='d-flex flex-column flex-lg-row text-center menu-list'>
                <button className={`nav-items px-4 fs-5 ${activeClass === "home" ? "active-nav-item" : ""}  `} onClick={() => handleSelect("home", homeRef)}>Home</button>
                <button className={`nav-items px-4 fs-5 ${activeClass === "about" ? "active-nav-item" : ""}  `} onClick={() => handleSelect("about", aboutref)}>About</button>
                <button className={`nav-items px-4 fs-5 ${activeClass === "skill" ? "active-nav-item" : ""}  `} onClick={() => handleSelect("skill", skillsRef)}>Skill</button>
                <button className={`nav-items px-4 fs-5 ${activeClass === "education" ? "active-nav-item" : ""}  `} onClick={() => handleSelect("education", educationRef)}>Education</button>
                <button className={`nav-items px-4 fs-5 ${activeClass === "experience" ? "active-nav-item" : ""}  `} onClick={() => handleSelect("experience", experienceRef)}>Experience</button>
            </div>
            <div>
                <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
            </div>

        </div>
    )
}

export default Header