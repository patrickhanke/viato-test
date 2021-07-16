import React from 'react'

const SideElementRechnung = ({formState}) => {

    const rechnungCheckHandler = () => {
        if (!formState.kontakt.vorname) return <p className="text">Bitte geben Sie eine Rechnungsadresse ein</p>
        else if (!formState.kontakt.nachname) return <p className="text">Bitte geben Sie eine Rechnungsadresse ein</p>
        else if (!formState.kontakt.strasse) return <p className="text">Bitte geben Sie eine Rechnungsadresse ein</p>
        else if (!formState.kontakt.hausnummer) return <p className="text">Bitte geben Sie eine Rechnungsadresse ein</p>
        else if (!formState.kontakt.plz) return <p className="text">Bitte geben Sie eine Rechnungsadresse ein</p>
        else if (!formState.kontakt.ort) return <p className="text">Bitte geben Sie eine Rechnungsadresse ein</p>
        else return (
            <div>
                <p className="text">{formState.kontakt.vorname + ' ' + formState.kontakt.nachname} </p>
                <p className="text">{formState.kontakt.strasse + ' ' + formState.kontakt.hausnummer} </p>
                <p className="text">{formState.kontakt.plz + ' ' + formState.kontakt.ort} </p>
            </div>
            )
    }

    return (
        <div>
            <p className="headline">Rechnungsadresse</p>
            {rechnungCheckHandler()} 
        </div>
    )
}

export default SideElementRechnung
