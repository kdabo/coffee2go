import * as React from 'react';
import {connect} from "react-redux";

import { GoogleMap, LoadScript, Marker} from '@react-google-maps/api'

import {fetchMarkers} from "../actions/MapActions";
import {IApplicationState} from "../reducers/Store";
import {IMapMarker} from "../types/MapTypes";
import Geolocation from "../components/Geolocation";

interface IProps {
   fetchMarkers: typeof fetchMarkers;
  //  markers: IMapMarker[]
}

class Map extends React.Component<IProps> {

    componentDidMount() {
        fetchMarkers({
            latitude: 52.379189,
            longitude: 4.899431
        })
    }

    render() {
        return (
            <LoadScript
                googleMapsApiKey=""
            >
                <GoogleMap
                    mapContainerStyle={{
                        height: "800px",
                        width: "800px"
                    }}
                    zoom={10}
                    center={{
                        lat: 52.379189,
                        lng: 4.899431
                    }}
                >
                    <Marker
                        onLoad={marker => {
                            console.log()
                        }}
                        position={{
                            lat: 37.772,
                            lng: -122.214
                        }}
                    />
                </GoogleMap>
            </LoadScript>
        )
    }
}

const mapStateToProps = ({markers}: IApplicationState) => {
    console.log("markers", markers);
    return {
        markers: markers
    }
};

export default connect(mapStateToProps, {fetchMarkers})(Map);
