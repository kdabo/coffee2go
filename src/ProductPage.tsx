import * as React from 'react';
import {RouteComponentProps, Prompt } from "react-router-dom";
import { connect } from "react-redux";

import { IProduct } from "./ProductsData";
import { addToBasket} from "./BasketActions";
import { getProduct } from "./ProductsActions";
import { IApplicationState} from "./Store";

import Product from "./Product";

// ideally the type should be number, but in this case RouteComponentProps only allows to have Route parameters of type string or undefined

// RouteComponentProps gives us match {} containing params {}, containing id route parameter
interface IProps extends RouteComponentProps<{id: string}> {
    addToBasket: typeof addToBasket;
    getProduct: typeof getProduct;
    loading: boolean;
    product?: IProduct;
    added: boolean;

}

class ProductPage extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);

        this.handleAddClick = this.handleAddClick.bind(this)
    }

    public componentDidMount() {
        if(this.props.match.params.id) {
            const id: number = parseInt(this.props.match.params.id, 10);
            this.props.getProduct(id);
        }
    }

    handleAddClick() {
        if(this.props.product) {
            this.props.addToBasket(this.props.product);
        }
    }

    private navAwayMessage = () => "Are you sure you leave without buying this product?";

    public render() {
        const product = this.props.product;

        return (
            <div className="page-container">
                {/*prompt component invokes a confirmation dialog during navigation when certain condition is met*/}
                <Prompt when={!this.props.added} message={this.navAwayMessage}/>
                {
                    product || this.props.loading ? (
                        <Product loading={this.props.loading}
                                 product={product}
                                 inBasket={this.props.added}
                                 onAddToBasket={this.handleAddClick}/>
                    ) : ( <p>Product not found</p>)
                }
            </div>
        )
    }
}

const mapStateToProps = (store: IApplicationState) => {
    console.log(store)
    return {
        added: store.basket.products.some(p => store.products.currentProduct ? p.id === store.products.currentProduct.id : false),
        basketProducts: store.basket.products,
        loading: store.products.productsLoading,
        product: store.products.currentProduct || undefined
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        addToBasket: (product: IProduct) => dispatch(addToBasket(product)),
        getProduct: (id: number) => dispatch(getProduct(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
