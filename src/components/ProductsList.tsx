import * as React from 'react';
import {Link, NavLink} from "react-router-dom";
import withLoader from "../hoc/withLoader";
import {ILocation} from "../types/LocationTypes";

import styled from "styled-components";
import {color, space, fontSize, fontWeight, width, flex, boxShadow, borderRadius, fontFamily} from 'styled-system';
import theme from "../styles/theme";

interface IProps {
    locations: ILocation[];
    search: string
}

interface IList {
    m: number;
}

interface IListItem {
    p: number;
    width: number[];
    boxShadow: string;
    borderRadius: string;
}

interface IListItemLink {
    mt: number;
    mb: number;
    mr: number;
    width: number[];
}

interface IReviewCount {
    fontSize: number;
    fontWeight: string;
    color: string;
    ml: number;
}

interface IName {
    fontSize: number;
    fontWeight: string;
    color: string;
    mt: number;
}

interface IAddress {
    fontSize: number;
    fontWeight: string;
    color: string;
    mb: number;
}

interface IOpeningHours {
    fontSize: number;
    color: string;
    fontFamily: string
}

const List = styled.ul < IList > `
    ${space};    
    ${flex};
    max-width: ${theme.maxWidth};
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const ListItemLink = styled(Link) < IListItemLink > `
   ${width};
   ${space};
`;

const ListItem = styled.li < IListItem > `
    ${width};
    ${space};
    ${boxShadow};
    ${borderRadius};
    display: inline-flex;
    justify-content: space-between;
    flex-direction: row;
`;

const Rating = styled.div < {className: string} > `
    width: 71px;
    height: 14px;
    display: inline-block;
    background: url('/star-rating.svg') 0 0 no-repeat;  
    ${({className}) => (className === "0" ? 'display: none;' : '')}
    ${({className}) => (className === "05" ? 'background-position: -56px -14px;' : '')}
    ${({className}) => (className === "1" ? 'background-position: -56px 0;' : '')}
    ${({className}) => (className === "15" ? 'background-position: -42px  -14px;' : '')}
    ${({className}) => (className === "2" ? 'background-position: -42px 0px;' : '')}
    ${({className}) => (className === "25" ? 'background-position: -28px -14px;' : '')}
    ${({className}) => (className === "3" ? 'background-position: -28px 0px;' : '')}
    ${({className}) => (className === "35" ? 'background-position: -14px -14px;' : '')}
    ${({className}) => (className === "4" ? 'background-position: -14px 0;' : '')}
    ${({className}) => (className === "45" ? 'background-position: 0 -14px;' : '')}
    ${({className}) => (className === "5" ? 'background-position: 0 0;' : '')}
`;


const ReviewCount = styled.div < IReviewCount > ` 
   display: inline-flex;
   ${fontSize};
   ${fontWeight};
   ${color};
   ${space};
`;

const Name = styled.div < IName > `
    display: flex;
    ${fontSize};
    ${fontWeight};
    ${color};
    ${space};
`;

const Address = styled.div < IAddress > `
    display: flex;
     ${fontSize};
     ${fontWeight};
     ${color};
     ${space};
`;

const OpeningHours = styled.div < IOpeningHours > `
    display: flex;
    ${fontSize};
    ${color};
    ${fontFamily};
`;

const Image = styled.div < {} > `
    display: block;
    box-sizing: border-box;
`;

const ProductsList: React.SFC<IProps> = props => {
    const search = props.search;

    if (!props.locations) {
        return <div>Loading...</div>
    }

    return (
        <List m={3}>
            {props.locations.map(location => {
                if (!search || (search && location.name.toLowerCase().indexOf(search.toLowerCase()) > -1)) {
                    return (
                        <ListItemLink width={[1]}
                                      mt={2} mb={2} mr={2}
                                      to={`/cafes/${location.id}`}
                                      key={location.id}>
                            <ListItem width={[1]}
                                      p={1}
                                      boxShadow={theme.boxShadow}
                                      borderRadius={theme.borderRadius}>
                                <div>
                                    <Rating className={`${location.rating.toString().split('.').join('')}`}/>
                                    <ReviewCount ml={1}
                                                 color={theme.colors.black}
                                                 fontSize={1}
                                                 fontWeight={theme.typography.fontWeightRegular}>{location.review_count} reviews</ReviewCount>
                                    <Name mt={2}
                                          color={theme.colors.black}
                                          fontSize={1}
                                          fontWeight={theme.typography.fontWeightBlack}>{location.name}</Name>
                                    <Address mb={2}
                                             color={theme.colors.black}
                                             fontSize={1}
                                             fontWeight={theme.typography.fontWeightRegular}>
                                        {location.location.address1}, {location.location.city} </Address>
                                    <OpeningHours color={theme.colors.green30}
                                                  fontSize={1}
                                                  fontFamily={theme.typography.fontFamilySecondary}>
                                        &#8226; {location.is_closed ? "Closed" : "Open now"}</OpeningHours>
                                </div>
                                <Image>
                                    <img src={location.image_url}
                                         width={94}
                                         height={114}
                                    />
                                </Image>
                            </ListItem>
                        </ListItemLink>
                    )
                } else {
                    return null;
                }
            })}
        </List>
    )
};

export default withLoader(ProductsList);
