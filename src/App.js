import { useState } from 'react';
import Header from './elements/header';
import SideElement from './elements/sideelement';
import Kontakt from './pages/kontakt';
import Reiseplanung from './pages/planung';
import Zimmer from './pages/zimmer';
import './styles/App.scss';
import './fonts/fonts.css'

function App() {
  const [appState, setAppState] = useState("planung")
  return (
    <div className="maincontainer">
      <div className="app">
        <div className="header">
          <h1>
            <span style={{color: "#C33521"}}>Viato Testhotel</span> online Buchen
          </h1>
          <div className="subnav">
            Kontakt / Hilfe
          </div>
        </div>
        <div className="content">
          <div className="contentcontainer">
            <div className="leftcontainer">
              <Header  appState={appState} setAppState={setAppState} />
              {appState === "planung" &&
                <Reiseplanung />
              }
              {appState === "zimmer" &&
                <Zimmer />
              }
              {appState === "kontakt" &&
                <Kontakt />
              }

            </div>
              <div className="rightcontainer">
                <SideElement appState={appState} setAppState={setAppState} />
              </div>

          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
