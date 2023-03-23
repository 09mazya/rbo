import React from 'react'
import BCenter from '../../components/BlockCenter/BCenter';
import BLeft from '../../components/BlockLeft/BLeft';
import BRight from '../../components/BlockRight/BRight';
import HeaderRbo from '../../components/HeaderRbo/HeaderRbo';

import './Layout.css'
function Layout() {
  return (
    <div className='rboWrapper'>
      <div>
        <HeaderRbo />
      </div>
      <div className='aaa'>
        <BLeft />
        <BCenter />
        <BRight />
      </div>
    </div>
  )
}

export default Layout;
