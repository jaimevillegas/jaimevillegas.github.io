import React, { useEffect, useState, useRef } from 'react'
import 'intersection-observer'
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
  const [activeNav, setActiveNav] = useState('#');
  const navItemsRef = useRef([]);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry);
          if (entry.isIntersecting) {
            setActiveNav(entry.target.getAttribute('id'));
          }
      });
    },
      { rootMargin: '0px', threshold: 0.5, root: null }
    );

    navItemsRef.current.forEach((ref) => {
      if (ref.current) {
        observer.current.observe(ref.current);
      }
    });

    return () => {
      observer.current.disconnect();
    };
  }, []);

  const createNavItemRef = (index) => {
    navItemsRef.current[index] = React.createRef();
    // navItemsRef.current[index] = React.useRef();
    console.log(navItemsRef.current[index]);  
    // console.log(React.createRef());
  };

  return (
    <>
      <I18nextProvider i18n={i18next}>
        <div className="category" id='#' ref={createNavItemRef(0)}>
          <Header />
          <Nav />
        </div>

        <div className="category" id='#about' ref={createNavItemRef(1)}>
          <About />
        </div>

        <div className="category" id='#experience'>
          <Experience />
        </div>

        <div className="category" id='#services'>
          <Services />
        </div>

        <div className="category" id='#portfolio'>
          <Portfolio />
        </div>

        <div className="category" id='#testimonials'>
          <Testimonials />
        </div>

        <div className="category" id='#contact'>
          <Contact />
          <Footer />
        </div>

      </ I18nextProvider>
    </>
  )
}

export default App