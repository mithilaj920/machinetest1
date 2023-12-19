import React from 'react';
import SideNav from './SideNav';
import { BrowserRouter, Route, Router, Routes }from "react-router-dom"

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<SideNav />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;