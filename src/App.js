import LoginComponent from './components/login/LoginComponent';
import LandingComponent from './components/landing/LandingComponent';
import { useState } from 'react';
import './App.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [component, setComponent] = useState(null);

  function changeComponent(component) {
    setComponent(component);
    console.log(component);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LandingComponent />} path="/landing" />
        <Route element={<LoginComponent />} path="/" />
      </Routes>

      <div>
        <h1>hejhej 10 kroneh snäll?!</h1>
        {component === null ? (
          <LoginComponent changeComponent={changeComponent} />
        ) : (
          ''
        )}
        {component === 'landing' ? (
          <LandingComponent changeComponent={changeComponent} />
        ) : (
          ''
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
