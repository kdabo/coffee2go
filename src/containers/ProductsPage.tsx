import * as React from 'react';
import { Link, RouteComponentProps } from "react-router-dom";
import "url-search-params-polyfill";
import { connect } from "react-redux";

import { IApplicationState } from "../reducers/Store";
import { ILocation } from "../types/LocationTypes";
import ProductsList from "../components/ProductsList"
import {fetchLocation} from "../actions/LocationsActions";

interface IProps extends RouteComponentProps {
    fetchLocation: typeof fetchLocation;
    loading: boolean;
    locations: ILocation[]
}

class ProductsPage extends React.Component<IProps> {

    public async componentDidMount(){
      this.props.fetchLocation();
    }

    public render() {
        const searchParams = new URLSearchParams(this.props.location.search);
        const search = searchParams.get("search") || "";

        return (
            <div className='page-container'>
                <p>
                    Welcome to React Shop where you can get all your tools for React JS
                </p>
                <ProductsList locations={this.props.locations}
                              loading={this.props.loading}
                              search={search} />
            </div>
        )
    }
}

const mapStateToProps = ( { locations }: IApplicationState) => {
  return {
      locations: locations.locations,
      locationsLoading: locations.locationsLoading,
      currentLocation:  null,
      errors: locations.errors
  }
};

const mapDispatchToProps = {
    fetchLocation
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
