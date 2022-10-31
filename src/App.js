import "./App.css"
import LoginComponent from "./components/login/LoginComponent"
import LandingComponent from "./components/landing/LandingComponent"
import { useState } from "react"

function App() {
  const [component, setComponent] = useState(null)

  function changeComponent(component) {
    setComponent(component)
    console.log(component)
  }
  return (
    <div className="App">
      <h1>hejhej 10 kroneh snäll?!</h1>
      {component === null ? (
        <LoginComponent changeComponent={changeComponent} />
      ) : (
        ""
      )}
      {component === "landing" ? (
        <LandingComponent changeComponent={changeComponent} />
      ) : (
        ""
      )}
    </div>
  )
}

export default App
