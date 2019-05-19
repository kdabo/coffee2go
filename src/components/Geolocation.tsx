import * as React from 'react';
import { GeolocatedProps, geolocated } from 'react-geolocated';

interface IGeolocation {
    label: string;
}

class Geolocation extends React.Component<IGeolocation & GeolocatedProps> {
    render(): JSX.Element {
        return (
            <div>
                label: {this.props.label}
                latitude: {this.props.coords && this.props.coords.latitude}
                longitude: {this.props.coords && this.props.coords.longitude}
                isGeolocationAvailable: {this.props.isGeolocationAvailable},
                isGeolocationEnabled: {this.props.isGeolocationEnabled},
                positionError: {this.props.positionError}
            </div>
        );
    }
}

export default geolocated()(Geolocation);
