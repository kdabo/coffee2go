import * as React from 'react';
import {RouteComponentProps, Prompt } from "react-router-dom";
import { connect } from "react-redux";

import { ILocation } from "../types/LocationTypes";
import { addToBasket} from "../actions/BasketActions";
import { IApplicationState} from "../reducers/Store";

import Product from "../components/Product";
import {fetchLocation} from "../actions/LocationsActions";


// ideally the type should be number, but in this case RouteComponentProps only allows to have Route parameters of type string or undefined

// RouteComponentProps gives us match {} containing params {}, containing id route parameter
interface IProps extends RouteComponentProps<{id: string}> {
    addToBasket: typeof addToBasket;
    fetchLocation: typeof fetchLocation;
    loading: boolean;
    location: ILocation;
    added: boolean;
}

class ProductPage extends React.Component<IProps> {
    constructor(props: any) {
        super(props);

        this.handleAddClick = this.handleAddClick.bind(this)
    }

    public componentDidMount() {
        if(this.props.match.params.id) {
            const business_id: string = this.props.match.params.id;
            this.props.fetchLocation(business_id);
        }
    }

    handleAddClick() {
        if(this.props.location) {
            this.props.addToBasket(this.props.location);
        }
    }

    private navAwayMessage = () => "Are you sure you leave without buying this product?";

    public render() {
        const location = this.props.location;

        return (
            <div className="page-container">
                {/*prompt component invokes a confirmation dialog during navigation when certain condition is met*/}
                <Prompt when={!this.props.added} message={this.navAwayMessage}/>
                {
                    location || this.props.loading ? (
                        <Product loading={this.props.loading}
                                 location={location}
                                 inBasket={this.props.added}
                                 onAddToBasket={this.handleAddClick}/>
                    ) : ( <p>Product not found</p>)
                }
            </div>
        )
    }
}

const mapStateToProps = (store: IApplicationState) => {
    console.log("Product Page store", store);
    return {
        added: store.basket.locations.some(p => store.locations.currentLocation ? p.id === store.locations.currentLocation.id : false),
        basketProducts: store.basket.locations,
        loading: store.locations.locationsLoading,
        location: store.locations.currentLocation
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        addToBasket: (location: ILocation) => dispatch(addToBasket(location)),
        fetchLocation: (business_id: string) => dispatch(fetchLocation(business_id)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
