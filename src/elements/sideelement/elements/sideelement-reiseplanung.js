import React from 'react'

const SideElementReiseplanung = ({formState}) => {

    const reiseCheckHandler = () => {
        const dateHandler = date => {
            let year = date.getFullYear()
            let month = date.getMonth() + 1
            let day = date.getDate()
            return day + "." + month + "." + year
        }
        if (!formState.anreise) return "Bitte wählen Sie einen An- und Abreisetermin aus"
        else if (!formState.abreise) return "Bitte wählen Sie einen An- und Abreisetermin aus"
        else return (dateHandler(formState.anreise) + " - " + dateHandler(formState.abreise))
    }

    return (
        <div>
            <p className="headline">Reisezeitraum</p>
            <p className="text">{reiseCheckHandler()}</p>
        </div>
    )
}

export default SideElementReiseplanung
