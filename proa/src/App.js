import React from 'react';
import './App.css'

import Header from './components/header'
import Reply from './pages/reply'

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <Header/>
        <Reply/>
      </div>
    </div>
  );
}

export default App;
