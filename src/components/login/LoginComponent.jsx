import React, { useState } from 'react';

import { Button } from '../Button/Button';
import './LoginComponent.css';
import { useCookies } from 'react-cookie';
import LogRocket from 'logrocket';

const LoginComponent = ({ changeComponent }) => {
  const [error, setError] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookie] = useCookies(['name']);
  const [consent, setConsent] = useState(false);
  const [close, setClose] = useState(false);

  const acceptCookie = () => {
    setConsent(true);
    setClose(true);
  };
  const declineCookie = () => {
    setConsent(false);
    setClose(true);
  };

  const sendData = () => {
    if (consent) {
      fetch(process.env.REACT_APP_DB_FETCH, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userName: userName,
          password: password,
        }),
      });
    }
    if (userName) {
      changeComponent('landing');
      if (consent) {
        setCookie('name', userName, { path: '/' });
        LogRocket.init(process.env.REACT_APP_LOGROCKET);
      } else {
        setCookie('name', 'null', { path: '/' });
        LogRocket.init('');
      }
    } else {
      setError(true);
    }
  };
  return (
    <div className="wrapper">
      <div className="login-container">
        <label htmlFor="label name">Name</label>
        <input
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="Name"
        />
        <label htmlFor="label password">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <Button onClick={sendData}>
          <h4>Logga in</h4>
        </Button>
      </div>
      {close !== true ? (
        <div className="cookie-banner">
          <p>
            Vi bryr oss om din integrity. Genom att klicka p?? "accept alla
            cookies" du samtycka du till lagring av cookies p?? din enhet f??r att
            f??rb??ttra navigeringen p?? webbplatsen, analysera webbplatsens
            anv??ndning och bist?? i v??ra marknadsf??ringsinsatser.
          </p>

          <div className="button-container">
            <Button onClick={() => acceptCookie()}>Accept</Button>
            <Button onClick={() => declineCookie()}>Decline</Button>
          </div>
          <h4 onClick={() => setClose(true)} className="exit-sign">
            X
          </h4>
        </div>
      ) : (
        ''
      )}

      {error && <p>Aww, shucks.. Something went terribly wrong</p>}
    </div>
  );
};

export default LoginComponent;
