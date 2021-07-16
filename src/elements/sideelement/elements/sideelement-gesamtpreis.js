import React from 'react'
import { useGesamtpreisHandler } from '../../../provider/functions'

const SiedeElementGesamtpreis = ({formState}) => {
    const preis = useGesamtpreisHandler(formState)
    
    return (
        <div>
            <p>
                Gesamtpreis
            </p>
            <p>
                {preis}
            </p>
            
        </div>
    )
}

export default SiedeElementGesamtpreis
