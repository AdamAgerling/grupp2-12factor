import React, { useState, useEffect } from 'react';

import { Button } from '../Button/Button';
import './LoginComponent.css'
import { useCookies } from 'react-cookie'


const LoginComponent = ({ changeComponent }) => {

  const [error, setError] = useState(false)
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookie] = useCookies(['name']);
  const [consent, setConsent] = useState(false)

  const acceptCookie = () => {
    setConsent(true)
  }
  const declineCookie = () => {
    setConsent(false)
  }


const sendData = () => {
  fetch('http://localhost:3001/api/users', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userName: userName,
      password: password
    })
  })
  if(userName){
    changeComponent('landing')
    if(consent){
    setCookie('name', userName, {path: '/'})
  } else {
    setCookie('name', 'null', {path: '/'})
  }
  }else{
      setError(true)
  }

}

  return (
    <div className='wrapper'>
      <div className='login-container'>
        <label htmlFor="label name">Name</label>
      <input onChange={(e) => setUserName(e.target.value)} type="text" placeholder='Name'/>
      <label htmlFor="label password">Password</label>
      <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password'/>
      <Button onClick={sendData}>
        <h4>Logga in</h4>
      </Button>
      </div>
      <div className='cookie-banner'>
        <p>
        Vi bryr oss om din integrity. Genom att klicka på "accept alla cookies" du samtycka du till lagring av cookies på din enhet för att förbättra navigeringen på webbplatsen, analysera webbplatsens användning och bistå i våra marknadsföringsinsatser.Integritetspolicy
        </p>
        <div className='button-container'>
      <Button onClick={() => acceptCookie()}>Accept</Button>
      <Button onClick={() => declineCookie()}>Decline</Button>
      </div>
      </div>
      {error && <p>Aww, shucks.. Something went terribly wrong</p>}
    </div>
  );
};

export default LoginComponent;
