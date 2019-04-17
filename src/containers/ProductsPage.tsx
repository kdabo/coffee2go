import * as React from 'react';
import { Link, RouteComponentProps } from "react-router-dom";
import "url-search-params-polyfill";
import { connect } from "react-redux";

import { IApplicationState } from "./Store";
import { getProducts } from "./actions/ProductsActions";
import { IProduct } from "./ProductsData";
import ProductsList from "./ProductsList"

interface IProps extends RouteComponentProps {
    getProducts: typeof getProducts;
    loading: boolean;
    products: IProduct[]
}

class ProductsPage extends React.Component<IProps> {

    public async componentDidMount(){
      this.props.getProducts();
    }

    public render() {
        const searchParams = new URLSearchParams(this.props.location.search);
        const search = searchParams.get("search") || "";

        return (
            <div className='page-container'>
                <p>
                    Welcome to React Shop where you can get all your tools for React JS
                </p>
                <ProductsList products={this.props.products}
                              loading={this.props.loading}
                              search={search} />
            </div>
        )
    }
}

const mapStateToProps = (store: IApplicationState) => {
  return {
      loading: store.products.productsLoading,
      products: store.products.products
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
      getProducts: () => dispatch(getProducts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);