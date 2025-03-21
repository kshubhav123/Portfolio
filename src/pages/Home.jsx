import { useScroll } from '../context/ScrollProvider'
import "../assets/css/home.css"
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import Banner from "../assets/images/ban.webp"

const ScrollTabs = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const { homeRef, aboutref, skillsRef, educationRef, experienceRef, hiremeref } = useScroll()
    return (
        <>

            <div className={`${theme === "light" ? "light-theme" : "dark-theme"}`}>


                <section id="home" ref={homeRef} className={`home-section d-flex align-items-center mb-5 px-3`}  >
                    <div className="container">
                        <div className="row">

                            {/* Left Side Content */}
                            <div className="col-lg-6 home-col-section text-center text-lg-start">
                                <h1 className="home-title">Hello! I'm SHUBHAV KUMAR</h1>
                                <h3 className="home-subtitle">Interactive Front-End Developer</h3>
                                <div className="mt-4">
                                    <a
                                        href="https://drive.google.com/file/d/1nQyKWFJQW9Yyf1VtJFlSacA_LXaQLHNz/view"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`btn ${theme === "light" ? "btn-outline-dark light-shadow" : "btn-outline-light dark-shadow"} text-decoration-none`}
                                    >
                                        Download Resume
                                    </a>
                                </div>
                            </div>

                            {/* Right Side Image */}
                            <div className="col-lg-6 text-center">
                                <img src={Banner} alt="Developer" className="img-fluid home-image" />
                            </div>

                        </div>
                    </div>
                </section>


                <section id="about" ref={aboutref} className="about-section px-3">
                    <div className="container">
                        <div className="text-center">
                            <div className="about-tag py-5">About Me</div>
                            <p className="lead about-content">
                                I'm <span className="fw-bold">Shubhav Kumar,</span>  Frontend Developer with 2+ years of experience in crafting interactive and user-friendly web applications using modern frameworks.
                            </p>
                            <p className='about-content fs-6 my-3'>
                                With expertise in <span className="fw-bold">React.js, </span>  JavaScript, HTML, CSS, and Bootstrap, I specialize in developing clean, responsive, and efficient web applications that provide seamless digital experiences.
                            </p>
                            <p className='about-content fs-6 my-3'>
                                I thrive on transforming complex ideas into intuitive interfaces, ensuring optimal performance and engaging user interactions. Whether it's building dynamic UI components, integrating APIs, or implementing best coding practices, I focus on delivering impactful solutions that align with user needs.
                            </p>
                            <p className='about-content fs-6 my-3'>
                                I'm committed to continuous learning and staying updated with industry trends to deliver innovative and effective web solutions.</p>
                        </div>
                    </div>
                </section>


                <section id="skills" ref={skillsRef} className="skills-section mb-3">
                    <div className="container">
                        <div className="skills-tag py-5">Skills</div>
                        <div className="row px-3">

                            <div className='col-lg-6 col-md-12 col-sm-12 px-4'>



                            </div>

                            <div className="col-lg-6 col-md-12 col-sm-12">

                                <div className="mb-3">
                                    <div className="fw-bold progress-bar-font">HTML</div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: "90%" }}>
                                            85%
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <div className="fw-bold progress-bar-font">CSS</div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: "90%" }}>
                                            90%
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <div className="fw-bold progress-bar-font">JavaScript</div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: "85%" }}>
                                            80%
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <div className="fw-bold progress-bar-font">Bootstrap</div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: "85%" }}>
                                            80%
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <div className="fw-bold progress-bar-font">React</div>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: "90%" }}>
                                            75%
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>



                <section id="education" ref={educationRef} className="edu-section">
                    <div className="skills-tag py-5">Education</div>
                    <div className="container">


                        <div className="row">
                            <div className="col-md-6 px-5 mb-5 ">
                                <div className='edu-title'> Bachelors Degree</div>
                                <div className='edu-subtitle'> CSJMU Kanpur, UP - 2020</div>
                                <div className='edu-desc'>
                                    I earned my Bachelor's Degree in Computer Applications (BCA) in 2014, gaining foundational knowledge in programming, databases, and software development.
                                </div>
                            </div>

                            <div className="col-md-6 px-5">

                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 px-5 mb-5 ">

                            </div>

                            <div className="col-md-6 px-5">
                                <div className='edu-title'> HSC Course</div>
                                <div className='edu-subtitle'> S.S.N.I.C Etawah, UP - 2017</div>
                                <div className='edu-desc'>
                                    I completed my Higher Secondary Certificate (HSC) in 12th class, acquiring a strong academic foundation across various subjects, which prepared me for future educational pursuits.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <section id="experience" ref={experienceRef} className="exp-section">
                    <div className="skills-tag mb-5">Experience</div>
                    <div className="container px-4">
                        <h3 className="exp-title">Frontend Developer</h3>
                        <p className="exp-company">Confidential (May 2022 - 31 Jan 2025)</p>
                        <ul className="list-disc exp-list">
                            <li className='my-3'>Designed, developed, and tested responsive web applications using React.js.</li>
                            <li className='my-3'>Integrated RESTful APIs built with Node.js and Django to enable seamless data exchange in React.js applications.</li>
                            <li className='my-3'>Created intuitive UI for the client portal database with enhanced UX features.</li>
                            <li className='my-3'>Led the design and integration of 3rd-party software solutions for enhanced functionality.</li>
                            <li className='my-3'> Developed reusable React components to improve code consistency and enhance development efficiency.</li>
                            <li className='my-3'> Implemented state management solutions using Redux and Context API for better data flow and scalability.</li>
                            <li className='my-3'> Optimized application performance by applying lazy loading, code splitting, and efficient rendering techniques.</li>
                            <li className='my-3'> Collaborated closely with designers and backend developers to ensure seamless UI/UX integration and improved user experience.</li>
                        </ul>
                    </div>
                </section>

                <section id="hireme" ref={hiremeref} className="hireme-section">
                    <div className="skills-tag py-5">Hire Me</div>
                    <div className="container">
                        <div className='hire-desc'>
                            You should hire me because I am a motivated developer with a Bachelor's Degree in Computer Applications and hands-on experience in React. I excel at creating responsive applications and optimizing user interfaces. My proactive problem-solving skills and passion for continuous learning make me a strong fit for your team. I am eager to contribute to company and help drive innovative solutions.                        </div>
                    </div>
                </section>





            </div>

        </>
    )

}

const Home = () => {
    return (
        <ScrollTabs />
    )
}

export default Home


{/* <div>I'm FUll Stack Developer with a focus on Frontend. I have 2 year of expereince in javascript and specilize in creating engaging user interfaces. i have also worked in backend and developed full stack application with react and flask for 4 year </div> */ }
