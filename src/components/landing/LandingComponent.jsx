import React, {useEffect, useState} from "react";
import { useCookies } from "react-cookie";
import CdnImage from '../cdnImage/CdnImage'
import { Button } from "../Button/Button";


const LandingComponent = ({ changeComponent }) => {
  const [cookies, removeCookie] = useCookies()
  const [users, setUsers] = useState(null)


  function handleRemoveCookie() {
    removeCookie("name");
  }

 useEffect(() => {
  fetch('http://localhost:3001/api/users/')
  .then(response => response.json())
  .then(result => {
    setUsers(result.users)
    console.log(result.users)
  })


 },[])







  return (
    <>
    <div>
      {cookies.name === undefined ?(
        <h1>Välkommen vänligen {cookies.name}</h1>
        ) : (
        <h1>Hej Unknown, Du har inte lagrat cookies sopa..</h1>
      )}
        <div>{users?.map((user) => (
          <p key={user._id}>{user.userName}</p>
        ))}
        </div>
      <p>Detta är landing page</p>
      <button>
        <h4 onClick={() => changeComponent(null)}>Logga ut</h4>
      </button>
      <h4>Har du ångrat dig och vill ta bort cookies?</h4>
      <Button onClick={() => handleRemoveCookie("name")}>Rensa kakor</Button>
    </div>
    <h2 >Här är en svettig dojja</h2>
    <CdnImage/>
    </>
  )
}

export default LandingComponent
