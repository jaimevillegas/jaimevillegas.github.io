import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const [t, i18n] = useTranslation('global');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ty3onec', 'template_diq47v9', form.current, 'tDFiGUgBQp92AmXF7')

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>{t("contact.titleSmall")}</h5>
      <h2>{t("contact.titleBig")}</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>jaimevillegas296@gmail.com</h5>
            <a href="mailto:jaimevillegas296@gmail.com">{t("contact.sendMessage")}</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <a href="https://wa.link/6aewsk">{t("contact.sendMessage")}</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder={t('contact.namePlaceholder')} required />
          <input type="email" name='email' placeholder={t("contact.emailPlaceholder")} required/>
          <textarea name="message" rows="7" placeholder={t("contact.messagePlaceholder")} required></textarea>
          <button type='submit' className='btn btn-primary'>{t("contact.sendButton")}</button>
        </form>
      </div>
    </section>
  )
}

export default Contact