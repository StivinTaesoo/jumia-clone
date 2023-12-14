import React from 'react'

export const MobileMenuItem = ({icon, text}) => {
  return (
    <div className='MobileMenuItem'>
        <div className="MobileMenuItem__icon">{icon}</div>
        <div className="MobileMenuItem__text">{text}</div>
    </div>
  )
}
