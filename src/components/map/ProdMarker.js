import React, {useState} from "react";
import {InfoWindowF, MarkerF} from "@react-google-maps/api";

/**
 * Marqueur de producteur sur la carte
 * @param producer
 * @returns {JSX.Element}
 * @constructor
 */
export default function ProdMarker({producer}) {

    const [open, setOpen] = useState(false);

    const handleMarkerClick = () => {
        open ? setOpen(false) : setOpen(true);
    }

    console.log(producer);

    const position = {
        lat: producer.latitude,
        lng: producer.longitude
    }

    return (
        <>
            <MarkerF
                onClick={handleMarkerClick}
                className="bg-blue-700"
                position={{lat: producer.latitude, lng: producer.longitude}}
                icon={{
                    url: require("../../assets/svg/Tomato.svg").default,
                    scale: 10,
                }}
            > {open && (<InfoWindowF
                onCloseClick={() => setOpen(false)}
                position={position}>
                <div className="space-y-1">
                    <div className="font-bold pb-1 border-b border-gray-200">
                        {producer.nom}
                    </div>
                    <div className="pt-1">
                        Stock : <span className="font-medium">{producer.quantite}</span>
                    </div>
                </div>
            </InfoWindowF>)}
            </MarkerF>

        </>
    )
}