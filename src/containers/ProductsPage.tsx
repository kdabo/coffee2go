import * as React from 'react';
import {Link, RouteComponentProps} from "react-router-dom";
import "url-search-params-polyfill";
import {connect} from "react-redux";
import {geolocated, GeolocatedProps} from "react-geolocated";


import {IApplicationState} from "../reducers/Store";
import {ILocation} from "../types/LocationTypes";
import ProductsList from "../components/ProductsList"
import {fetchLocations} from "../actions/LocationsActions";

import Map from "../components/Map";
import Loader from "../components/Loader";

import styled from "styled-components";
import {color, space, fontSize, fontWeight} from 'styled-system';
import theme from "../styles/theme";
import {IMapMarker} from "../types/MapTypes";

interface IProps extends RouteComponentProps {
    fetchLocations: typeof fetchLocations;
    loading: boolean;
    locations: ILocation[],
    coords: IMapMarker
}

interface IHeader {
    color: string;
    fontSize: number;
    fontWeight: string;
    m: number
}

const Header = styled.div < IHeader > `
    ${color};
    ${fontSize};
    ${fontWeight};
    ${space};
`;

const ProductsPageContainer = styled.div < {} > `
    display: inline-flex;
`;

class ProductsPage extends React.Component<IProps & GeolocatedProps> {

    public async componentDidMount() {
        this.props.fetchLocations(this.props.locations);
    }


    public render() {
        const searchParams = new URLSearchParams(this.props.location.search);
        const search = searchParams.get("search") || "";
        const {locations, isGeolocationAvailable, isGeolocationEnabled, coords} = this.props;

        if(!locations) {
            return <Loader />
        }

        const getMarkers = locations.map(location => {
            let marker = {};
            if(location && location.coordinates && location.coordinates.latitude && location.coordinates.longitude) {
                marker = {
                    latitude: location.coordinates.latitude,
                    longitude: location.coordinates.longitude
                };
                return marker
            }
            return marker
        });

        return (
            <>
            <Header color={theme.colors.black}
                    fontSize={2}
                    fontWeight={"bolder"}
                    m={3}
            >
                Explore cafes
            </Header>
            <ProductsPageContainer>
                <ProductsList locations={locations}
                              loading={this.props.loading}
                              search={search}/>

                {!isGeolocationAvailable ? (
                    <div>Your browser does not support Geolocation.</div>
                ) : !isGeolocationEnabled ? (
                    <div>Geolocation is not enabled.</div>
                ) : locations ? (
                    <Map center={{ latitude: coords && coords.latitude, longitude: coords && coords.longitude}}
                         markers={getMarkers}
                    />) : (<Loader />)}
            </ProductsPageContainer>
            </>
        )
    }
}

const mapStateToProps = ({locations}: IApplicationState) => {
    return {
        locations: locations.locations.businesses,
        locationsLoading: locations.locationsLoading,
        currentLocation: locations.currentLocation,
        errors: locations.errors
    }
};


export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 2000,
})(connect(mapStateToProps, {fetchLocations})(ProductsPage));
