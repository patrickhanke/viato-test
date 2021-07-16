import React from 'react'

const SiedeElementGaestezahl = ({formState}) => {
    
    const erwachseneCheckHandler = () => {
        if (parseInt(formState.erwachsene) > 1) return formState.erwachsene + " Erwachsene"
        else if (parseInt(formState.erwachsene) === 1) return formState.erwachsene + " Erwachsener"
        else return null
    }

    const kinderCheckHandler = () => {
        if (parseInt(formState.kinder) > 1) return formState.kinder + " Kinder"
        else if (parseInt(formState.kinder) === 1) return formState.kinder + " Kind"
        else return null
    }

    return (
        <div>
            <p className="headline">Gästezahl</p>
            <p className="text">{erwachseneCheckHandler()}</p>
            <p className="text">{kinderCheckHandler()}</p>
        </div>
    )
}

export default SiedeElementGaestezahl
