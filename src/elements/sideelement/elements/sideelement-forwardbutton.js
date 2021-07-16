import React, { useEffect, useState } from 'react'
import { kontaktDatenCheck } from '../../../provider/functions'

const SideElementForwardbutton = ({formState, appState, setAppState}) => {
    const [disabled, setDisabled] = useState(true)
    useEffect(() => {
        if (appState === "planung") {
            if (formState.anreise && formState.abreise) setDisabled(false)
            else setDisabled(true)
        }
        if (appState === "zimmer") {
            if (formState.zimmer) setDisabled(false)
            else setDisabled(true)
        }
        if (appState === "kontakt") {
            if (kontaktDatenCheck(formState)) setDisabled(false)
            else setDisabled(true)
        }
    }, [appState, formState])

    const checkoutButtonHandler = () => {
        console.log(appState)
        if (appState === "planung") {
            setAppState("zimmer")
        }
        else if (appState === "zimmer") {
            setAppState("kontakt")
        }

        else if (appState === "kontakt") window.alert(JSON.stringify(formState, null, 2))
    }
    console.log(disabled)
    return (
        <button className="primarybutton" disabled={disabled} onClick={() => checkoutButtonHandler()}>
            Weiter
        </button>
    )
}

export default SideElementForwardbutton
