import * as React from 'react';
import {RouteComponentProps, Prompt } from "react-router-dom";
import { IProduct, products} from "./ProductsData";

// ideally the type should be number, but in this case RouteComponentProps only allows to have Route parameters of type string or undefined

// RouteComponentProps gives us match {} containing params {}, containing id route parameter
type Props = RouteComponentProps<{id: string}>;

interface Istate {
    // optional because it is going to be undefined at first
    product?: IProduct;
    added: boolean;
}

class ProductPage extends React.Component<Props, Istate> {
    public constructor(props: Props) {
        super(props);

        this.state = {
            added: false
        };
    }

    public componentDidMount() {
        if(this.props.match.params.id) {
            const id: number = parseInt(this.props.match.params.id, 10);
            const product = products.filter(product => product.id === id)[0];

            this.setState({ product });
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
                    product ? (
                        <React.Fragment>
                            <h1>{product.name}</h1>
                            <p>{product.description}</p>
                            <p className="product-price">
                                {
                                new Intl.NumberFormat("en-US", {
                                    currency: "USD",
                                    style: "currency"
                                }).format(product.price)
                                }
                            </p>
                            { !this.state.added && (<button onClick={this.handleClick}>Add to basket</button>)}
                        </React.Fragment>) : (
                        <p>Product not found</p>
                    )
                }
            </div>
        )
    }

}

export default ProductPage;
