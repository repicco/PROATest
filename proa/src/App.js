import React from 'react';
import './App.css'

import Header from './components/header'
import Reply from './pages/reply'
import Footer from './components/footer'

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <Header/>
        <Reply/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
