import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
// import LandingComponent from '../landing/LandingComponent';


const LoginComponent = ({ changeComponent }) => {
  // const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(false)
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (userName !== '' && password !== '') {
      // setDisabled(false);
    }
  }, [password, userName]);

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
  }else{
      setError(true)
  }
}

  return (
    <div>
      <input onChange={(e) => setUserName(e.target.value)} type="text" />
      <input onChange={(e) => setPassword(e.target.value)} type="password" />
      {/* <Link to={`landing?id=${id}`}> */}
      <Button onClick={sendData}>
        <h4>Logga in</h4>
      </Button>
      {/* </Link> */}
      {error && <p>Aww, shucks.. Something went terribly wrong</p>}
    </div>
  );
};

export default LoginComponent;
