import React, { useEffect, useState } from 'react'
import ReactDatePicker from "react-datepicker";
import { registerLocale } from  "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import de from 'date-fns/locale/de';
registerLocale('de', de)


const Reisezeitraum = ({formState, reisedatumHandler}) => {
    const [anreise, setAnreise] = useState()
    const [abreise, setAbreise] = useState()
    
    useEffect(() => {
        if (formState.anreise) setAnreise(formState.anreise)
        if (formState.abreise) setAbreise(formState.abreise)
    }, [formState])

    const anreiseHandler = (datum) => {
        setAnreise(datum)
        reisedatumHandler({anreise: datum})
    }
    const abreiseHandler = (datum) => {
        setAbreise(datum)
        reisedatumHandler({abreise: datum})
    }

    return (
        <div className="elementcontent">
            <ReactDatePicker
                selected={anreise}
                onChange={e => anreiseHandler(e)}
                className=""
            />
            bis
            <ReactDatePicker
                selected={abreise}
                onChange={e => abreiseHandler(e)}
                className=""
            />
            
        </div>
    )
}

export default Reisezeitraum
