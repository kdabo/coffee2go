import * as React from 'react';
import {RouteComponentProps, Prompt } from "react-router-dom";
import { getProduct, IProduct, products} from "./ProductsData";

import Product from "./Product";

// ideally the type should be number, but in this case RouteComponentProps only allows to have Route parameters of type string or undefined

// RouteComponentProps gives us match {} containing params {}, containing id route parameter
type Props = RouteComponentProps<{id: string}>;

interface Istate {
    // optional because it is going to be undefined at first
    product?: IProduct;
    added: boolean;
    loading: boolean;
}

class ProductPage extends React.Component<Props, Istate> {
    public constructor(props: Props) {
        super(props);

        this.state = {
            added: false,
            loading: true
        };
    }

    public async componentDidMount() {
        if(this.props.match.params.id) {
            const id: number = parseInt(this.props.match.params.id, 10);
            const product = await getProduct(id);
            if (product !== null) {
                this.setState({ product, loading: false });
            }
        }
    }

    handleClick() {
        this.setState({added: true});
    }

    private navAwayMessage = () => "Are you sure you leave without buying this product?";

    public render() {
        const product = this.state.product;
        return (
            <div className="page-container">
                {/*prompt component invokes a confirmation dialog during navigation when certain condition is met*/}
                <Prompt when={!this.state.added} message={this.navAwayMessage}/>
                {
                    product || this.state.loading ? (
                        <Product loading={this.state.loading}
                                 product={product}
                                 inBasket={this.state.added}
                                 onAddToBasket={this.handleClick}/>
                    ) : ( <p>Product not found</p>)
                }
            </div>
        )
    }

}

export default ProductPage;
