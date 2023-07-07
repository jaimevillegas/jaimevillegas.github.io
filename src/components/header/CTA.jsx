import React from 'react'
import CV from '../../assets/resume.pdf'
import { useTranslation } from 'react-i18next'

const CTA = () => {
  const [t, i18n] = useTranslation('global');

  return (
    <div className='cta'>
      <a href={CV} download className='btn'>{t("CTA.CV")}</a>
      <a href="#contact" className='btn btn-primary'>{t("CTA.contact")}</a>
    </div>
  )
}

export default CTA