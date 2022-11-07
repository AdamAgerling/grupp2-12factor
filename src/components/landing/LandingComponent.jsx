import React, { useEffect, useState } from "react"
const LandingComponent = ({ changeComponent }) => {
  const [users, setUsers] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3001/api/users/")
      .then((response) => response.json())
      .then((result) => {
        setUsers(result.users)
      }, [])
  })

  return (
    <div>
      {users?.map((user) => (
        <h1 key={user._id}>Välkommen vänligen{user.userName}</h1>
      ))}
      <p>Detta är landing page</p>
      <button>
        <h4 onClick={() => changeComponent(null)}>Logga ut</h4>
      </button>
    </div>
  )
}

export default LandingComponent
