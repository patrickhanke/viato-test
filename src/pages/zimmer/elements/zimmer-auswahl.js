import React from 'react'

const ZimmerAuswahl = ({formState, room, rates, zimmerHandler}) => {
    const selectButtonHandler = (rate) => {
        zimmerHandler({room: room, rate: rate})
    }

    const zimmerCheck = (id) => {
        if (formState.zimmer) if (id === formState.zimmer.auswahl.id) return true
        else return false
    }

    return (
        <div className="element">
            <h3>{room.name}</h3>
            {room.rates.map(rate => 
                <div style={{display: "flex", flexDirection: "row", alignItems: "stretch", width: "100%"}}>
                    <div className="elementcontent" style={{justifyContent: "space-between", flex: "0 1 100%"}}>
                        <p>
                            {rates[rate].name}
                        </p>
                        <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "2.4rem"}}>
                            <p>
                                {(rates[rate].price / 100) + ",00 €"}
                            </p>
                            <button className={zimmerCheck(rate) ? "button-zimmer selected" : "button-zimmer"} onClick={() => selectButtonHandler({...rates[rate], id: rate })}>
                                Wählen
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ZimmerAuswahl
