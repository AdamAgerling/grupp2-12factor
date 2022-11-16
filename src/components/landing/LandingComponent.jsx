import React, { useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import CdnImage from "../cdnImage/CdnImage"
import { Button } from "../Button/Button"

const LandingComponent = ({ changeComponent }) => {
  const [cookies, removeCookie] = useCookies()
  const [data, setData] = useState(null)

  function handleRemoveCookie() {
    removeCookie("name")
  }

  useEffect(() => {
    fetch("http://localhost:3001/api/users/")
      .then((response) => response.json())
      .then((result) => {
        setData(result.users)
      })
  }, [])

  return (
    <>
      <div>
        {cookies.name === "null" ? (
          <h1>Hej Unknown, Du har inte lagrat cookies sopa..</h1>
        ) : (
          <h1>Välkommen vänligen {cookies.name}</h1>
        )}
        <div>
          <p>Användare med sparade cookies:</p>
          {data?.map((user) => (
            <p key={user._id}>{user.userName}</p>
          ))}
        </div>
        <div>
          <Button onClick={() => changeComponent(null)}>
            <h4>Logga ut</h4>
          </Button>
          <h4>Har du ångrat dig och vill ta bort cookies?</h4>
          <Button onClick={() => handleRemoveCookie()}>Rensa kakor</Button>
        </div>
      </div>
      <h2>Här är en svettig dojja</h2>
      <CdnImage />
    </>
  )
}

export default LandingComponent
