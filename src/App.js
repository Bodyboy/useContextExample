import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Service from './Service';
import { AppProvider } from './AppContext';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/service" element={<Service/>} />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;