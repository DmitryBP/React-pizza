import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import './scss/app.scss';
import React, { useState } from 'react';
import NotFound from './components/Not-found';
import Cart from './components/Cart';

export const searchContext = React.createContext('');
function App() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <searchContext.Provider value={{ searchValue, setSearchValue }}>
      <div className="App">
        <div className="wrapper">
          <Header />
          <div className="content">
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </searchContext.Provider>
  );
}

export default App;
