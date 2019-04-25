import * as React from 'react';
import {NavLink, RouteComponentProps, withRouter} from "react-router-dom";
import "url-search-params-polyfill";
import {connect} from "react-redux";

import BasketSummary from "../components/BasketSummary";
import {IApplicationState} from "../reducers/Store";

import logo from "../logo.svg";
import styled from "styled-components";
import {color, width, space, boxShadow, borderRadius, fontSize, fontWeight } from 'styled-system';
import theme from "../styles/theme";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


interface IProps extends RouteComponentProps {
    basketCount: number
}

interface IState {
    search: string;
}

interface INavigationHeader {
    color: string;
    width: number[];
}

interface ILogo {
    mt: number
    ml: number
}

interface ISearchContainer {
    mt: number;
    pl: number;
    pr: number
    boxShadow: string;
    borderRadius: string;
    fontSize: number;
    fontWeight: string
}

interface ISearchWrapper {
    width: number;
}

interface INavigation {
    mt: number
    pr: number
    fontSize: number
}

const NavigationHeader = styled.div<INavigationHeader>`
    ${color};
    ${width};
    position: sticky;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0px;
    background-color: white;
    height: 80px;
`;

const Logo = styled.img<ILogo>`
    height: 60px;
    ${space};
`;

const SearchWrapper = styled.div<ISearchWrapper>`
    ${width};
`;

const SearchIconWrapper = styled.div<{}>`
    position: absolute;
    top: 40px;
    left: 442px;
`;

const SearchContainer = styled.input<ISearchContainer>`
    ${space};
    ${width};
    ${boxShadow};
    ${borderRadius};
    ${fontSize};
    ${fontWeight};
    height: 48px;
    border: 1px solid white;
`;

const Navigation = styled.nav<INavigation>`
    ${space};
    ${fontSize};
    text-decoration: none;
`;

const NavigationLink = styled.div`
    color: black;
    text-decoration: none;
    padding: 5px;
    display: inline-flex;
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
            <NavigationHeader color={theme.colors.black}
                              width={[ 1 ]}>
                <Logo src={logo} alt="logo" mt={3} ml={3} />
                <SearchWrapper width={460}>
                    <SearchIconWrapper>
                     <FontAwesomeIcon icon={faSearch} color={"#3D464D"} />
                    </SearchIconWrapper>
                        <SearchContainer
                        mt={3}
                        pl={5}
                        pr={2}
                        width={"100%"}
                        fontSize={2}
                        fontWeight={"normal"}
                        boxShadow={theme.boxShadow}
                        borderRadius={theme.borderRadius}
                        type="search"
                        placeholder="Search for cafes"
                        value={this.state.search}
                        onChange={this.handleSearchChange}
                        onKeyDown={this.handleSearchKeydown}
                    />
                    {/*<BasketSummary count={this.props.basketCount}/>*/}
                </SearchWrapper>
                {/*<h1 className="header-title">React Shop</h1>*/}
                <Navigation mt={3}
                            pr={3}
                            fontSize={2}
                            color={theme.colors.black}>
                    <NavigationLink>
                        <NavLink to="/products" className="header-link"
                                 activeClassName="header-link-active">Cafés</NavLink>
                    </NavigationLink>
                    <NavigationLink>
                        <NavLink to="/contact" className="header-link"
                                 activeClassName="header-link-active">Contact</NavLink>
                    </NavigationLink>
                        <NavigationLink>
                        <NavLink to="/admin" className="header-link" activeClassName="header-link-active">Admin</NavLink>
                        </NavigationLink>
                </Navigation>
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
