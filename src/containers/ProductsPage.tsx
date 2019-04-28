import * as React from 'react';
import { Link, RouteComponentProps } from "react-router-dom";
import "url-search-params-polyfill";
import { connect } from "react-redux";

import { IApplicationState } from "../reducers/Store";
import { ILocation } from "../types/LocationTypes";
import ProductsList from "../components/ProductsList"
import {fetchLocations} from "../actions/LocationsActions";

interface IProps extends RouteComponentProps {
    fetchLocations: typeof fetchLocations;
    loading: boolean;
    locations: ILocation[]
}

class ProductsPage extends React.Component<IProps> {

    public async componentDidMount(){
      this.props.fetchLocations(this.props.locations);
    }

    public render() {
        const searchParams = new URLSearchParams(this.props.location.search);
        const search = searchParams.get("search") || "";

        return (
            <div className='page-container'>
                <p>
                    Best coffee in the neighbourhood
                </p>
                <ProductsList locations={this.props.locations}
                              loading={this.props.loading}
                              search={search} />
            </div>
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
