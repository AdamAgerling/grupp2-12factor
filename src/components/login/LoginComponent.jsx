import React, { useState, useEffect } from "react"

const LoginComponent = ({ changeComponent }) => {
  const [disabled, setDisabled] = useState(true)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  useEffect(() => {
    if (username !== "" && password !== "") {
      setDisabled(false)
    }
  }, [password, username])
  return (
    <div>
      <input onChange={(e) => setUsername(e.target.value)} type="text" />
      <input onChange={(e) => setPassword(e.target.value)} type="password" />
      <button disabled={disabled} onClick={() => changeComponent("landing")}>
        {" "}
        <h4>Logga in</h4>
      </button>
    </div>
  )
}

export default LoginComponent
