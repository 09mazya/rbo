import React from 'react';
import Layout from './pages/layout/Layout';
import RegisterRbo from './pages/register/RegisterRbo';

import { Routes , Route } from 'react-router-dom';
import './App.css';
function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/rbo" element={<RegisterRbo />}/>
        <Route path='/profile' element={<Layout />}/>
      </Routes>
    </div>
  );
}

export default App;
