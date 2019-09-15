import * as React from 'react';
import styled from "styled-components";
import {NavLink} from 'react-router-dom';
import {fontSize, space, color} from "styled-system";
import theme from "../styles/theme";

interface IProps {
    path: string
}

interface INavigationLink {
    fontSize: number
    backgroundColor: string;
    p: number
}

const NavigationLink = styled(NavLink)< INavigationLink > `
    ${space};
    ${fontSize};
    ${color};
    display: inline-block;
    width: auto;
    color: ${theme.colors.white}
    border-radius: ${theme.borderRadius};
    font-weight: ${theme.typography.fontWeightRegular}
    transition: all 0.1s ease-in-out 0s;
    text-transform: uppercase;
    spacing: 2;
    cursor: pointer;

    &:hover {
       transform: scale(1.05);
    }
`;


const PrimaryButton: React.SFC<IProps> = ({children, path}) => {
    return (
        <NavigationLink to={path}
                        fontSize={2}
                        p={3}
                        backgroundColor={theme.colors.darkBlue30}
        >
            {children}
        </NavigationLink>
    )
};

export default PrimaryButton;
