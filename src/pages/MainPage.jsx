import { lazy } from 'react'
import Skills from '../components/Skills'
import Experience_Education from '../components/Experience_Education'
import Projects from '../components/Projects'
import WhatIdo from '../components/WhatIdo'
import { About } from '../components/About'
import { Contact } from '../components/Contact'
import Footer from '../components/Footer'

const Banner = lazy(() => import('../components/Banner'))

const MainPage = () => {
  return (
    <>
      <Banner />
      <WhatIdo />
      <Skills />
      <Experience_Education />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default MainPage