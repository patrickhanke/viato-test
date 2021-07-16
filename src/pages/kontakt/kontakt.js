import React, { useContext } from 'react'
import BookingContext from '../../provider/booking-context'
import '../../styles/pages.scss'

const Kontakt = () => {
    const {kontaktHandler, formState} = useContext(BookingContext)

    const kontaktInputHandler = (e) => {
        kontaktHandler({name: e.target.name, value: e.target.value})
    }

    return (
        <div style={{padding: "20px"}}>
            <div className="pagecontainer">
                <div className="element">
                    <div className="elementcontent" style={{border: "none"}}>
                        <div className="labelcontainer">
                            <label htmlFor="vorname">
                                Vorname,
                            </label>
                            <label htmlFor="nachname">
                                Nachname
                            </label>
                        </div>
                        <input
                            name="vorname"
                            onBlur={(e) => kontaktInputHandler(e)}
                            defaultValue={formState.kontakt.vorname}
                            style={{width: "200px"}}
                        />
                        <input
                            name="nachname"
                            onBlur={(e) => kontaktInputHandler(e)}
                            defaultValue={formState.kontakt.nachname}
                            style={{width: "200px"}}
                        />
                    </div>
                    <div className="elementcontent" style={{border: "none"}}>
                        <div className="labelcontainer">
                            <label htmlFor="strasse">
                                Straße,
                            </label>
                            <label htmlFor="hausnummer">
                                Nr.
                            </label>
                        </div>
                        <input
                            name="strasse"
                            onBlur={(e) => kontaktInputHandler(e)}
                            defaultValue={formState.kontakt.strasse}
                            style={{width: "240px"}}
                        />
                        <input
                            name="hausnummer"
                            onBlur={(e) => kontaktInputHandler(e)}
                            defaultValue={formState.kontakt.hausnummer}
                            style={{width: "40px"}}
                        />
            
                    </div>
                    <div className="elementcontent" style={{border: "none"}}>
                        <div className="labelcontainer">
                            <label htmlFor="plz">
                                PLZ,
                            </label>
                            <label htmlFor="ort">
                                Ort
                            </label>
                        </div>
                        <input
                            name="plz"
                            onBlur={(e) => kontaktInputHandler(e)}
                            defaultValue={formState.kontakt.plz}
                            style={{width: "60px"}}
                        />
                        <input
                            name="ort"
                            onBlur={(e) => kontaktInputHandler(e)}
                            defaultValue={formState.kontakt.ort}
                            style={{width: "200px"}}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Kontakt
