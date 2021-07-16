import React, { useEffect, useState } from "react"



const Personen = ({formState, personenHandler}) => {
    const [erwachsene, setErwachsene] = useState()
    const [kinder, setKinder] = useState()
    useEffect(() => {
        if (formState.erwachsene) setErwachsene(parseInt( formState.erwachsene))
        if (formState.kinder) setKinder(parseInt(formState.kinder))
    }, [formState])

    const erwachsenenHandler = (erwachsene) => {
        erwachsene.preventDefault()
        setErwachsene(erwachsene)
        personenHandler({erwachsene: erwachsene.target.value})
    }
    const kinderHandler = (kinder) => {
        kinder.preventDefault()
        setKinder(kinder)
        personenHandler({kinder: kinder.target.value})
    }

    return (
        <div className="elementcontent">
            <div>
                <label htmlFor="erwachsene" style={{marginRight: "20px"}}>
                    Erwachsene
                </label>
                <input
                    type="number"
                    name="erwachsene"
                    onChange={e => erwachsenenHandler(e)}
                    defaultValue={erwachsene}
                    style={{width: "40px"}}
                />

            </div>
            <div>
                <label htmlFor="kinder" style={{marginRight: "20px"}}>
                    Kinder
                </label>
                <input
                    type="number"
                    name="kinder"
                    onChange={e => kinderHandler(e)}
                    defaultValue={kinder}
                    style={{width: "40px"}}
                />
            </div>
            
        </div>
    )
}

export default Personen