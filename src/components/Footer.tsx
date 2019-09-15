import * as React from 'react';
import styled from "styled-components";
import theme from "../styles/theme";


const FooterContainer = styled.footer <{}>`
    width: 100%;
    background: ${theme.colors.darkBlue30}
    color: ${theme.colors.white}
    display: flex;
    text-align: center;
    align-items: center;
    padding-top: 82px;
    padding-bottom: 82px;
    justify-content: center;
`;

const Footer: React.SFC = () => {
    return (
        <FooterContainer>
            <h1>© 2019 Coffee2go</h1>
        </FooterContainer>
    )
};

export default Footer;
