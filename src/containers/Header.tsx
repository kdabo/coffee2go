import * as React from 'react';
import {NavLink, RouteComponentProps, withRouter} from "react-router-dom";
import "url-search-params-polyfill";
import {connect} from "react-redux";

import BasketSummary from "../components/BasketSummary";
import {IApplicationState} from "../reducers/Store";

import logo from "../logo.svg";
import styled from "styled-components";
import className from 'styled-components'
import {color, width, space, boxShadow, borderRadius, fontSize, fontWeight} from 'styled-system';
import theme from "../styles/theme";

import {faBars} from "@fortawesome/free-solid-svg-icons";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


interface IProps extends RouteComponentProps {
    basketCount: number
}

interface IState {
    search: string;
    showNavigation: boolean
}

interface INavigationHeader {
    color: string;
    width: number[];
}

interface ILogo {
    mt: number
    ml: number
    mr: number
}

interface ISearchContainer {
    mt: number;
    pl: number;
    pr: number;
    mr: number;
    boxShadow: string;
    borderRadius: string;
    fontSize: number;
    fontWeight: string
}

interface ISearchWrapper {
    width: number[];
}

interface INavigationLink {
    fontSize: number
    color: string;
    p: number;
}

interface INavigationContainer {
    mt: number;
    mr: number;
}

interface INavigationButton {
    mt: number;
    mr: number;
}

const NavigationHeader = styled.div < INavigationHeader > `
    ${color};
    ${width};
    position: sticky;
    display: flex;
    flex-wrap: unset;
    align-items: center;
    top: 0px;
    background-color: white;
    
     ${theme.mediaQueries.small} {
       flex-wrap: wrap;
    }
    
`;

const Logo = styled.img < ILogo > `
    height: 55px;
    ${space};
`;

const SearchWrapper = styled.div < ISearchWrapper > `
    ${width};
    position: relative;
`;

const SearchIconWrapper = styled.div < {} > `
    position: absolute;
    top: 28px;
    left: 25px;
`;

const SearchContainer = styled.input <ISearchContainer> `
    ${space};
    ${width};
    ${boxShadow};
    ${borderRadius};
    ${fontSize};
    ${fontWeight};
    height: 45px;
    border: 1px solid white;
`;

const NavigationContainer = styled.nav <INavigationContainer>`
    ${space}; 
    display: none;
    
     ${theme.mediaQueries.medium} {
        margin-left: auto;
        display: flex;
    }
`;

const activeLinkClassName = 'header-link-active';
const NavigationLink = styled(NavLink)<INavigationLink> `
    ${fontSize};
    ${color};
    ${space};
    text-decoration: none;
    
    &.${activeLinkClassName} {
      border-bottom: ${theme.colors.darkBlue30} solid 2px;
      color: ${theme.colors.gray30};
    } 
`;


const activeMenuHeader = 'active-menu-header';

const NavigationButton = styled.div<INavigationButton>`
     margin-left: auto;
     cursor: pointer;
     ${space};
     
     
     ${theme.mediaQueries.medium} {
       display:none;
    }
`;


class Header extends React.Component<IProps, IState> {

    public constructor(props: IProps) {
        super(props);

        this.state = {
            search: "",
            showNavigation: false,
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

    private handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
        this.setState({
            showNavigation: !this.state.showNavigation
        })
    }

    public render() {
        return (
            <NavigationHeader color={theme.colors.black}
                              width={[1]}>
                <Logo src={logo} alt="logo" mt={3} ml={3} mr={3}/>
                <SearchWrapper width={[ 1/2 ]}>
                    <SearchIconWrapper>
                        <FontAwesomeIcon icon={faSearch} color={"#3D464D"}/>
                    </SearchIconWrapper>
                    <SearchContainer
                        mr={3}
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
                <NavigationButton  mr={3}
                                   mt={3}
                                   onClick={this.handleClick}
                >
                    <FontAwesomeIcon icon={faBars} color={"#3D464D"} size="2x"  />
                    { this.state.showNavigation ? "Hi" : null }
                </NavigationButton>
                <NavigationContainer  mt={3} mr={3}>
                    <NavigationLink as={NavLink}
                                    to="/products"
                                    fontSize={2}
                                    color={theme.colors.gray30}
                                    p={2}
                                    activeClassName={activeLinkClassName}>
                        Cafés
                    </NavigationLink>
                    <NavigationLink as={NavLink}
                                    to="/contact"
                                    fontSize={2}
                                    color={theme.colors.gray30}
                                    p={2}
                                    activeClassName={activeLinkClassName}>
                        Contact
                    </NavigationLink>
                    <NavigationLink as={NavLink}
                                    to="/admin"
                                    fontSize={2}
                                    color={theme.colors.gray30}
                                    p={2}
                                    activeClassName={activeLinkClassName}>
                        Admin
                    </NavigationLink>
                </NavigationContainer>
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
