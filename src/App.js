import LoginComponent from "./components/login/LoginComponent"
import LandingComponent from "./components/landing/LandingComponent"
import { useState } from "react"
import styles from "./App.module.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CookiesProvider } from "react-cookie"

function App() {
  const [component, setComponent] = useState(null)

  function changeComponent(component) {
    setComponent(component)
    console.log(component)
  }
  return (
    // <BrowserRouter>
    <CookiesProvider>
      {/*      <Routes>
         <Route element={<LandingComponent />} path="/landing" />
         <Route element={<LoginComponent />} path="/" />
        </Routes> */}

      <div>
        <div className={styles.navbar}>
          <h1>hejhej 10 kroneh snäll?!</h1>
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
    // </BrowserRouter>
  )
}

export default App
