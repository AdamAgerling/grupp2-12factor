import React from "react";
import { useCookies } from "react-cookie";
import CdnImage from '../cdnImage/CdnImage'
import { Button } from "../Button/Button";


const LandingComponent = ({ changeComponent }) => {
  const [cookies, removeCookie] = useCookies()

  function handleRemoveCookie() {
    removeCookie("name");
  }

  return (
    <>
    <div>
      {cookies.name ? (
        <h1>Välkommen vänligen {cookies.name}</h1>
        ) : (
        <h1>Hej Unknown, Du har inte lagrat cookies sopa..</h1>
      )}

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
