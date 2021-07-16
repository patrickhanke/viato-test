import React, { useContext } from 'react';
import BookingContext from '../../provider/booking-context';
import Reisezeitraum from './elements/reisezeitraum';
import '../../styles/pages.scss';
import './planung.scss';
import Personen from './elements/personen';

const Reiseplanung = () => {
    const {reisedatumHandler, formState, personenHandler} = useContext(BookingContext)
    
    return (
        <div style={{padding: "20px"}}>
            <div className="pagecontainer">
                <div className="element">
                    <div style={{textAlign: "left", width: "100%"}}>
                        <h3>
                            Reisezeitraum
                        </h3>
                        <Reisezeitraum formState={formState} reisedatumHandler={reisedatumHandler} />
                    </div>
                    <div style={{textAlign: "left", width: "100%"}}>
                        <h3>
                            Gästezahl
                        </h3>
                        <Personen formState={formState} personenHandler={personenHandler} />
                    </div>
            
                </div>
            
            </div>
        </div>
    )
}

export default Reiseplanung
