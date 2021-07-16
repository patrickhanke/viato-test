import React, { useContext } from 'react'
import zimmer from '../../provider/data.json'
import ZimmerAuswahl from './elements/zimmer-auswahl'
import BookingContext from '../../provider/booking-context'
import '../../styles/pages.scss'
import './zimmer.scss'

const Zimmer = () => {
    const {zimmerHandler, formState} = useContext(BookingContext)

    return (
        <div style={{padding: "20px"}}>
            <div className="pagecontainer">
                <ZimmerAuswahl formState={formState} room={zimmer.rooms.HdkdoNdk23Mdn} rates={zimmer.rates} zimmerHandler={zimmerHandler} />
                <ZimmerAuswahl formState={formState} room={zimmer.rooms.JHdko39dnKd22} rates={zimmer.rates} zimmerHandler={zimmerHandler} />
            </div>
        </div>
    )
}

export default Zimmer
