import React, { useContext } from 'react'
import BookingContext from '../../provider/booking-context'
import SideElementForwardbutton from './elements/sideelement-forwardbutton'
import SiedeElementGaestezahl from './elements/sideelement-gaestezahl'
import SiedeElementGesamtpreis from './elements/sideelement-gesamtpreis'
import SideElementRechnung from './elements/sideelement-rechnung'
import SideElementReiseplanung from './elements/sideelement-reiseplanung'
import SideElementZimmer from './elements/sideelement-zimmer'
import './sideelement.scss'

const SideElement = ({appState, setAppState}) => {
    const {formState} = useContext(BookingContext)
    const backbuttonHandler = () => {
        if (appState === "kontakt") {
            setAppState("zimmer")
        }
        if (appState === "zimmer") {
            setAppState("planung")
        }
    }
    
    return (
        <div className="sideelementcontainer">
            <div style={{padding: "10px"}}>
                <h2 style={{borderBottom: "2px solid #C33521", width: "auto", displaY: "inline-block"}}>
                    Ihre Auswahl
                </h2>
                <SideElementReiseplanung formState={formState} />
                <SiedeElementGaestezahl formState={formState} />
                <SideElementZimmer formState={formState} />
                <SideElementRechnung formState={formState} />
                {formState.zimmer && formState.abreise && formState.anreise &&
                    <SiedeElementGesamtpreis formState={formState} />
                }
            </div>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-end",  width: "100%"}}>
                <div style={{minWidth: "1px", padding: "10px"}}>
                    {appState !== "planung" &&
                        <button className="secondarybutton"  onClick={() => backbuttonHandler()}>
                            Zurück
                        </button>
                    }
                </div>
                <div style={{padding: "10px"}}>
                    <SideElementForwardbutton formState={formState} appState={appState} setAppState={setAppState} />
                </div>
            </div>

        </div>
    )
}

export default SideElement
