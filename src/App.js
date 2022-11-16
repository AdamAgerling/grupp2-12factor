import LoginComponent from "./components/login/LoginComponent"
import LandingComponent from "./components/landing/LandingComponent"
import { useState } from "react"
import styles from "./App.module.css"
import { CookiesProvider } from "react-cookie"

function App() {
  const [component, setComponent] = useState(null)

  function changeComponent(component) {
    setComponent(component)
  }
  return (
    <CookiesProvider>
      <div>
        <div className={styles.navbar}>
          <h1>Logga in</h1>
        </div>
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
    </CookiesProvider>
  )
}

export default App
