import React from "react";
import { useCookies } from "react-cookie";
import CdnImage from '../cdnImage/CdnImage'


const LandingComponent = ({ changeComponent }) => {
  const [cookies] = useCookies()

  return (
    <>
    <div>
      {cookies.name === "null" ? (
        <h1>Hej Unknown, Du har inte lagrat cookies sopa..</h1>
      ) : (
        <h1>Välkommen vänligen {cookies.name}</h1>
      )}

      <p>Detta är landing page</p>
      <button>
        <h4 onClick={() => changeComponent(null)}>Logga ut</h4>
      </button>
    </div>
    <h2 >Här är en svettig dojja</h2>
    <CdnImage/>
    </>
  )
}

export default LandingComponent
