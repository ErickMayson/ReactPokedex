import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Navbar from './components/layouts/Navbar';
import Dashboard from './components/layouts/Dashboard';

// import Dashboard from './components/layouts/Dashboard';

const App = function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
