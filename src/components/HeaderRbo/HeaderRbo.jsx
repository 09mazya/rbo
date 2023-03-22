import React from 'react'
import bell from '../../Assets/bell.svg'
import image2 from '../../Assets/image2.svg'
import sms from '../../Assets/sms.svg'

import './Header.css'
function HeaderRbo() {
  return (
    <div className='HeaderRbo'>
      <div className='RBO'>
        <p>РБО КБ «КЫРГЫЗСТАН»</p>
      </div>
      <div className='rboButtons'>
        <a href="">Отчёты</a>
        <a href="">Шаблоны отчетов</a>
      </div>
      <div className='rboImg'>
        <img src={bell} alt="" />
        <img src={image2} alt="" />
        <img src={sms} alt="" />
      </div>
    </div>
  )
}

export default HeaderRbo;
