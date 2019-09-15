import * as React from 'react';
import {NavLink, RouteComponentProps, withRouter} from "react-router-dom";
import "url-search-params-polyfill";
import {connect} from "react-redux";
import Sidebar from "react-sidebar";
import {isMobileOnly} from 'react-device-detect';

import BasketSummary from "../components/BasketSummary";
import {IApplicationState} from "../reducers/Store";

import logo from "../assets/logo.png";
import styled from "styled-components";
import {color, width, space, boxShadow, borderRadius, fontSize, fontWeight} from 'styled-system';
import theme from "../styles/theme";

import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


interface IProps extends RouteComponentProps {
    basketCount: number;
}

interface IState {
    search: string;
    sidebarOpen: boolean
}

interface INavigationHeader {
    color: string;
    width: string;
}

interface ILogo {
    mt: number
    ml: number
    mr: number
    mb: number;
}

interface ISearchContainer {
    mt: number;
    pl: number;
    pr: number;
    mr: number;
    mb: number;
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
    ml?: number;
    mt?: number;
    mr?: number;
}

const NavigationHeader = styled.div < INavigationHeader > `
    ${color};
    ${width};
    max-width: ${theme.maxWidth};
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    top: 0px;
`;

const Logo = styled.img < ILogo > `
    height: 75px;
    
    ${theme.mediaQueries.medium} {
    height: 125px;
    transition: all 0.1s ease-in-out 0s;
    ${space};
        &:hover {
           transform: scale(1.05);
        }
    }
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

const SearchContainer = styled.input < ISearchContainer > `
    ${space};
    ${width};
    ${boxShadow};
    ${borderRadius};
    ${fontSize};
    ${fontWeight};
    height: 45px;
    border: 1px solid white;
`;

const NavigationContainer = styled.nav < INavigationContainer > `

     ${theme.mediaQueries.xs} {
        display: block;
        width: 200px;
    }
    
    ${theme.mediaQueries.small} {
        display: block;
    }
     
     ${theme.mediaQueries.medium} {
        margin-right: 20px;
        margin-left: auto;
        display: flex;
        width: auto
    }
`;

const activeLinkClassName = 'header-link-active';
const NavigationLink = styled(NavLink) < INavigationLink > `
    ${fontSize};
    ${color};
    ${space};
    text-decoration: none;
    border-bottom: ${theme.colors.white} solid 2px;
    
     ${theme.mediaQueries.xs} {
        display: block;
     }
     
     ${theme.mediaQueries.small} {
        display: block;
    }
    
    ${theme.mediaQueries.medium} {
        display: flex;
    }
    
    &:hover {
      border-bottom: ${theme.colors.darkBlue30} solid 2px;
    }
    
    &.${activeLinkClassName} {
      border-bottom: ${theme.colors.darkBlue30} solid 2px;
      color: ${theme.colors.gray30};
    }
    
    
`;

const NavigationButton = styled.div < INavigationButton > `
     display: inline-flex;
     margin-left: auto;
     cursor: pointer;
     ${space};
`;


class Header extends React.Component<IProps, IState> {

    public constructor(props: IProps) {
        super(props);

        this.state = {
            search: "",
            sidebarOpen: false,
        };

        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
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
            this.props.history.push(`/cafes?search=${this.state.search}`);
        }
    };

    private onSetSidebarOpen = (open: boolean) => {
        this.setState({sidebarOpen: open});
    };

    renderMobileNavigationMenu = () => {
        return <Sidebar dragToggleDistance={40}
                        pullRight={false}
                        sidebar={<NavigationContainer mt={3} mr={3}>
                            <NavigationLink as={NavLink}
                                            to="/cafes"
                                            fontSize={2}
                                            color={theme.colors.black}
                                            p={2}>
                                Cafés
                            </NavigationLink>
                            <NavigationLink as={NavLink}
                                            to="/contact"
                                            fontSize={2}
                                            color={theme.colors.black}
                                            p={2}>
                                Contact
                            </NavigationLink>
                            <NavigationLink as={NavLink}
                                            to="/admin"
                                            fontSize={2}
                                            color={theme.colors.black}
                                            p={2}>
                                Admin
                            </NavigationLink>
                        </NavigationContainer>}
                        open={this.state.sidebarOpen}
                        onSetOpen={this.onSetSidebarOpen}
                        styles={{sidebar: {background: "white"}}}>
            <NavigationButton
                mt={4}
                ml={78}
                onClick={() => this.onSetSidebarOpen(true)}>
                <FontAwesomeIcon icon={faChevronDown} color={"#3D464D"} size="1x"/>
            </NavigationButton>
        </Sidebar>
    };

    public render() {

        return (
            <NavigationHeader color={theme.colors.black}
                              width={"100%"}>
                <a href={"/"}>
                    <Logo src={logo} alt="logo" mt={3} ml={3} mr={3} mb={3}/>
                </a>
                {this.props.location.pathname === "/home" ? null :
                    <SearchWrapper width={[1 / 2]}>
                        <SearchIconWrapper>
                            <FontAwesomeIcon icon={faSearch} color={"#3D464D"}/>
                        </SearchIconWrapper>
                        <SearchContainer
                            mr={3}
                            mt={3}
                            mb={3}
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
                }
                {isMobileOnly ? this.renderMobileNavigationMenu() :
                    <NavigationContainer mt={3} mr={3}>
                        <NavigationLink as={NavLink}
                                        to="/home"
                                        fontSize={3}
                                        color={theme.colors.black}
                                        p={2}
                                        activeClassName={activeLinkClassName}>
                            Home
                        </NavigationLink>
                        <NavigationLink as={NavLink}
                                        to="/cafes"
                                        fontSize={3}
                                        color={theme.colors.black}
                                        p={2}
                                        activeClassName={activeLinkClassName}>
                            Cafés
                        </NavigationLink>
                        <NavigationLink as={NavLink}
                                        to="/contact"
                                        fontSize={3}
                                        color={theme.colors.black}
                                        p={2}
                                        activeClassName={activeLinkClassName}>
                            Contact
                        </NavigationLink>
                        {/*<NavigationLink as={NavLink}*/}
                        {/*                to="/admin"*/}
                        {/*                fontSize={3}*/}
                        {/*                color={theme.colors.black}*/}
                        {/*                p={2}*/}
                        {/*                activeClassName={activeLinkClassName}>*/}
                        {/*    Admin*/}
                        {/*</NavigationLink>*/}
                    </NavigationContainer>
                }
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
