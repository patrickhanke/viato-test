import React from 'react'
import './header.scss'

const Header = ({appState, setAppState}) => {
    return (
        <div style={{padding: "20px"}}>
            <div className="navigation">
                <h2 className={appState === "planung" ? "navitem is-active" : "navitem"} >
                    1. Ihre Reiseplanung
                </h2>
                <h2 className={appState === "zimmer" ? "navitem is-active" : "navitem"} >
                    2. Verfügbare Zimmer
                </h2>
                <h2 className={appState === "kontakt" ? "navitem is-active" : "navitem"} >
                    3. Kontaktdaten
                </h2>
            
            </div>
        </div>
    )
}

export default Header
