import React, { useContext, useRef } from 'react'
import { ScrollContext } from './ScrollContext'

export const ScrollProvider = ({ children }) => {

    const homeRef = useRef(null);
    const aboutref = useRef(null);
    const skillsRef = useRef(null);
    const educationRef = useRef(null);
    const experienceRef = useRef(null);
    const hiremeref = useRef(null);

    const scrollToEvent = (ref) => {
        if (ref?.current) {
            ref.current.scrollIntoView({ behaviour: "smooth", block: "start" })
        }
    }

    return (
        <ScrollContext.Provider value={{ homeRef, aboutref, skillsRef, educationRef, experienceRef, hiremeref, scrollToEvent }}>
            {children}
        </ScrollContext.Provider>


    )
}


export const useScroll = () => {
    const context = useContext(ScrollContext);
    if (!context) {
        throw new Error("useScroll must be used within a ScrollProvider");
    }
    return context;
};