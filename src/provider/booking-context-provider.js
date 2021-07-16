import React, { useState } from 'react'
import BookingContext from './booking-context'

const initialValues = {
    erwachsene: 1,
    kinder: 0,
    kontakt: {
        vorname: "",
        nachname: "",
        strasse: "",
        hausnummer: "",
        plz: "",
        ort: "",
    }
}


const BookingContextProvider = ({children}) => {
    const [formState, setFormState] = useState(initialValues)

    const reisedatumHandler = ({anreise, abreise}) => {
        let newState = {...formState}
        anreise && (newState.anreise = anreise)
        abreise && (newState.abreise = abreise)
        setFormState(newState)

    }
    const personenHandler = ({erwachsene, kinder}) => {
        let newState = {...formState}
        erwachsene && (newState.erwachsene = erwachsene)
        kinder && (newState.kinder = kinder)
        console.log(newState)
        setFormState(newState)

    }
    const zimmerHandler = ({room, rate}) => {
        let newState = {...formState}
        newState.zimmer = {
            ...room,
            auswahl: {
                ...rate
            }
        }
        setFormState(newState)
    }
    const kontaktHandler = ({name, value}) => {
        let newState = {...formState}
        newState.kontakt[name] = value
        setFormState(newState)
    }
    const preisHandler = (value) => {
        let newState = {...formState}
        newState.gesamtpreis = value
        // Fehler ?
        // setFormState(newState)
    }
    
    return (
        <BookingContext.Provider
        value={{
            formState: formState,
            reisedatumHandler: reisedatumHandler,
            personenHandler: personenHandler,
            zimmerHandler: zimmerHandler,
            kontaktHandler: kontaktHandler,
            preisHandler: preisHandler
        }}
        >
            {children}
        </BookingContext.Provider>
    )
}

export default BookingContextProvider
