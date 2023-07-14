import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

import global_en from './translations/en/global.json'
import global_es from './translations/es/global.json'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'

i18next.init({
  interpolation: { escapeValue: true },
  lng: 'en',
  resources: {
    en: {
      global: global_en,
    },
    es: {
      global: global_es,
    },
  },
});

const App = () => {
  return (
    <>
      <I18nextProvider i18n={i18next}>
        <Header />
        {/* <Nav /> */}
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </ I18nextProvider>
    </>
  )
}

export default App