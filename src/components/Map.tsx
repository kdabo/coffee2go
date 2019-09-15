import * as React from 'react';
import {GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

import {IMapMarker, IMapState} from "../types/MapTypes";
import Loader from "../components/Loader";
import theme from "../styles/theme";

type GenericObject = { [key: string]: any };

interface IProps {
    center: IMapMarker,
    markers: GenericObject
}

class Map extends React.Component<IProps> {

    render() {
        const {center, markers} = this.props;

        if (!center || !markers) {
            return <Loader/>
        }


        const getMarkers = markers.map((marker: GenericObject, index: number) => {
            return (
                <Marker
                    key={index}
                    position={{
                        lat: markers[index].latitude,
                        lng: markers[index].longitude
                    }}
                />
            )
        });

        return (
            <LoadScript
                id="script-loader"
                googleMapsApiKey="AIzaSyAqtvhv4IAOGDQsDzXmu4ejQPArzomcHlU"
            >
                <GoogleMap
                    mapContainerStyle={{
                        height: '800px',
                        width: '800px',
                        margin: '24px 16px 16px 0px'
                    }}
                    zoom={13}
                    center={{
                        lat: center.latitude,
                        lng: center.longitude
                    }}
                    options={{
                        draggable: true, // make map draggable
                        scaleControl: true, // allow scale controle
                        scrollwheel: true, // allow scroll wheel
                    }}

                >
                    {getMarkers}
                </GoogleMap>
            </LoadScript>
        )
    }
}

export default Map;
