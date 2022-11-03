import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';

const LoginComponent = ({ changeComponent }) => {
  const [disabled, setDisabled] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    if (username !== '' && password !== '') {
      setDisabled(false);
    }
  }, [password, username]);

  return (
    <div>
      <input onChange={(e) => setUsername(e.target.value)} type="text" />
      <input onChange={(e) => setPassword(e.target.value)} type="password" />
      <Button disabled={disabled} onClick={() => changeComponent('landing')}>
        <h4>Logga in</h4>
      </Button>
    </div>
  );
};

export default LoginComponent;
