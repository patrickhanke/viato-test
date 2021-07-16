import React from 'react'

const SideElementZimmer = ({formState}) => {

    const zimmerCheckHandler = () => {
        if (formState.zimmer) return (
            <>
                <p className="text">{formState.zimmer?.name}</p>
                <div>
                    <p className="text">{formState.zimmer.auswahl?.name}</p>
                    <p className="text">{formState.zimmer.auswahl?.price.toString()} €</p>
                </div>
            </>
        )
        else return <p className="text">Bitte wählen Sie ein Zimmer </p>
    }

    return (
        <div>
            <p className="headline">Gewünschte Zimmer</p>
            {zimmerCheckHandler()} 
        </div>
    )
}

export default SideElementZimmer
