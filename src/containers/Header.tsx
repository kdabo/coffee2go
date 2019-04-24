import * as React from 'react';
import {NavLink, RouteComponentProps, withRouter} from "react-router-dom";
import "url-search-params-polyfill";
import {connect} from "react-redux";

import BasketSummary from "../components/BasketSummary";
import {IApplicationState} from "../reducers/Store";

import logo from "../logo.svg";
import styled from "styled-components";
import {color, width } from 'styled-system';


interface IProps extends RouteComponentProps {
    basketCount: number
}

interface IState {
    search: string;
}

interface NavigationHeader {
    color: string;
    width: number[];
}

const NavigationHeader = styled.div<NavigationHeader>`
    ${color};
    ${width};
    position: sticky;
    display: flex;
    justify-content: space-between;
    top: 0px;
    text-align: center;
    background-color: white;
    height: 80px;
    padding: 1rem;
`;

const SearchContainer = styled.input<{}>`
    border-radius: 0px;
    height: 56px;
    border: 1px solid #f6f6f6;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .125);
`;

class Header extends React.Component<IProps, IState> {

    public constructor(props: IProps) {
        super(props);

        this.state = {
            search: ""
        }
    }

    public componentDidMount() {
        const searchParams = new URLSearchParams(this.props.location.search);
        const search = searchParams.get("search") || "";
        this.setState({search})
    }

    private handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({search: e.target.value});
    };

    private handleSearchKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            this.props.history.push(`/products?search=${this.state.search}`);
        }
    };

    public render() {
        return (
            <NavigationHeader color='black'
                              width={[ 1 ]}>
                <img src={logo} className="header-logo" alt="logo"/>
                <div>
                    <SearchContainer
                        type="search"
                        placeholder="search"
                        value={this.state.search}
                        onChange={this.handleSearchChange}
                        onKeyDown={this.handleSearchKeydown}
                    />
                    <BasketSummary count={this.props.basketCount}/>
                </div>
                {/*<h1 className="header-title">React Shop</h1>*/}
                <nav>
                    <NavLink to="/products" className="header-link"
                             activeClassName="header-link-active">Cafés</NavLink>
                    <NavLink to="/contact" className="header-link"
                             activeClassName="header-link-active">Contact</NavLink>
                    <NavLink to="/admin" className="header-link" activeClassName="header-link-active">Admin</NavLink>
                </nav>
            </NavigationHeader>
        )
    }
}

const mapStateToProps = (store: IApplicationState) => {
    return {
        basketCount: store.basket.locations.length
    }
};

export default connect(mapStateToProps)(withRouter(Header));
