import * as React from 'react';
import {Link, RouteComponentProps} from "react-router-dom";
import "url-search-params-polyfill";
import {connect} from "react-redux";

import {IApplicationState} from "../reducers/Store";
import {ILocation} from "../types/LocationTypes";
import ProductsList from "../components/ProductsList"
import {fetchLocations} from "../actions/LocationsActions";

import Map from "../components/Map";

import styled from "styled-components";
import {color, space, fontSize, fontWeight} from 'styled-system';
import theme from "../styles/theme";
import {geolocated, GeolocatedProps} from "react-geolocated";

interface IProps extends RouteComponentProps {
    fetchLocations: typeof fetchLocations;
    loading: boolean;
    locations: ILocation[]
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

const getDirection = (degrees: any, isLongitude: any) =>
    degrees > 0 ? (isLongitude ? "E" : "N") : isLongitude ? "W" : "S";

const formatDegrees = (degrees: any, isLongitude: any) =>
    `${0 | degrees}° ${0 |
    (((degrees < 0 ? (degrees = -degrees) : degrees) % 1) * 60)}' ${0 |
    (((degrees * 60) % 1) * 60)}" ${getDirection(degrees, isLongitude)}`;

class ProductsPage extends React.Component<IProps & GeolocatedProps> {

    public async componentDidMount() {
        this.props.fetchLocations(this.props.locations);
    }

    public render() {
        const searchParams = new URLSearchParams(this.props.location.search);
        const search = searchParams.get("search") || "";
        const {props} = this;

        return (
            <>
            <Header color={theme.colors.black}
                    fontSize={2}
                    fontWeight={"bolder"}
                    m={3}
            >
                Explore cafes in Amsterdam,

                {!props.isGeolocationAvailable ? (
                    <div>Your browser does not support Geolocation.</div>
                ) : !props.isGeolocationEnabled ? (
                    <div>Geolocation is not enabled.</div>
                ) : props.coords ? (
                    <>
                    <div>
                        You are at{" "}
                        <span className="coordinate">
                            {formatDegrees(props.coords.latitude, false)}
                        </span>,{" "}
                        <span className="coordinate">
                            {formatDegrees(props.coords.longitude, true)}
                        </span>
                        <br/>
                        <span className="coordinate">
                            {props.coords.latitude}
                        </span>,{" "}
                        <span className="coordinate">
                            {props.coords.longitude}
                        </span>
                        {props.coords.altitude ? (
                            <span>
                                , approximately {props.coords.altitude} meters
                                above sea level
                            </span>
                        ) : null}
                    </div>


                    </>
                ) : (
                    <div>Getting the location data&hellip;</div>

                )}

            </Header>
            <ProductsPageContainer>
                <ProductsList locations={this.props.locations}
                              loading={this.props.loading}
                              search={search}/>
                <Map/>
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
    userDecisionTimeout: 5000,
})(connect(mapStateToProps, {fetchLocations})(ProductsPage));
