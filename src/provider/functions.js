import React, { useContext } from 'react'
import BookingContext from './booking-context'

export const kontaktDatenCheck = (formState) => {
    if (!formState.kontakt.vorname) return false
    else if (!formState.kontakt.nachname) return false
    else if (!formState.kontakt.strasse) return false
    else if (!formState.kontakt.hausnummer) return false
    else if (!formState.kontakt.plz) return false
    else if (!formState.kontakt.ort) return false
    else return true

}

export const useGesamtpreisHandler = (formState) => {
    const {preisHandler} = useContext(BookingContext)

    const dateDifferenceHandler = () => {
        let date1 = new Date(formState.anreise)
        let date2 = new Date(formState.abreise)
        let difference = Math.abs(date1 - date2)
        console.log(difference/86400000)

        return (difference/86400000)
    }

    let price = (formState.zimmer.auswahl.price / 100)* dateDifferenceHandler()
    preisHandler(price)
    
    return (<p>{price + ",00 €" } </p>)
}