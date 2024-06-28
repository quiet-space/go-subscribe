import React from 'react';
import List from './components/content/List'
import Write from './components/content/write'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <BrowserRouter>
              <div className="Container">
            <Routes>
              <Route path='/' element={<List />} />
              <Route path='/write' element={<Write />} />
            </Routes>
              </div>
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
