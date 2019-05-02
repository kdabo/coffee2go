import * as React from 'react';
import { Link, RouteComponentProps } from "react-router-dom";
import "url-search-params-polyfill";
import { connect } from "react-redux";

import { IApplicationState } from "../reducers/Store";
import { ILocation } from "../types/LocationTypes";
import ProductsList from "../components/ProductsList"
import {fetchLocations} from "../actions/LocationsActions";

import styled from "styled-components";
import {color, space, fontSize, fontWeight} from 'styled-system';
import theme from "../styles/theme";

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


const Header = styled.div <IHeader> `
    ${color};
    ${fontSize};
    ${fontWeight};
    ${space};
`;

class ProductsPage extends React.Component<IProps> {

    public async componentDidMount(){
      this.props.fetchLocations(this.props.locations);
    }

    public render() {
        const searchParams = new URLSearchParams(this.props.location.search);
        const search = searchParams.get("search") || "";

        return (
            <>
                <Header color={theme.colors.black}
                        fontSize={2}
                        fontWeight={"bolder"}
                        m={3}
                >
                    Explore cafes in Amsterdam
                </Header>
                <ProductsList locations={this.props.locations}
                              loading={this.props.loading}
                              search={search} />
            </>
        )
    }
}

const mapStateToProps = ( {locations}: IApplicationState) => {
    return {
      locations: locations.locations.businesses,
      locationsLoading: locations.locationsLoading,
      currentLocation:  locations.currentLocation,
      errors: locations.errors
  }
};


export default connect(mapStateToProps, {fetchLocations})(ProductsPage);
