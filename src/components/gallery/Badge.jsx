import React from 'react'
import './badge.css'


function Badge({ name, image }) {
  return (
    <div className='badges-section'>
      <div className="badge-container">
        <img className="badge-image" src={image} alt="" />
        <p className='badge-content'>{name}</p>
      </div>
    </div>
  )
}

export default Badge