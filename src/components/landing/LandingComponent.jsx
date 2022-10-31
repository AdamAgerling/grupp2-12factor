import React from "react"

const LandingComponent = ({ changeComponent }) => {
  return (
    <div>
      <h1>Välkommen vänligen</h1>
      <p>Detta är landing page</p>
      <button>
        {" "}
        <h4 onClick={() => changeComponent(null)}>Logga ut</h4>
      </button>
    </div>
  )
}

export default LandingComponent
