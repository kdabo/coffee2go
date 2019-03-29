import * as React from 'react';
import { Link, RouteComponentProps } from "react-router-dom";
import "url-search-params-polyfill";

import {IProduct, products} from "./ProductsData";

interface Istate {
    products: IProduct[];
    search: string;
}

class ProductsPage extends React.Component<RouteComponentProps, Istate> {
    public constructor(props: RouteComponentProps) {
        super(props);

        this.state = {
            products: [],
            search: ""
        }
    }

    // gets called when component loads and when its props change
    public static getDerivedStateFromProps(props: RouteComponentProps, state: Istate) {
        const searchParams = new URLSearchParams(props.location.search);
        const search = searchParams.get("search") || "";

        return {
            products: products,
            search
        }
    }

    public componentDidMount(){
      this.setState({products});
    }

    public render() {
        return(
            <div className='page-container'>
                <p>
                    Welcome to React Shop where you can get all your tools for React JS
                </p>
                <ul className="product-list">
                    {this.state.products.map(product => {
                        if (!this.state.search || (this.state.search && product.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1)) {
                            return (
                                <li key={product.id} className="product-list-item">
                                    <Link to={`/products/${product.id}`}> {product.name} </Link>
                                </li>
                            )
                        } else {
                            return null;
                        }
                    })}
                </ul>
            </div>
        )
    }
}

export default ProductsPage;