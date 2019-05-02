import * as React from 'react';
import { Link } from "react-router-dom";
import withLoader from "../hoc/withLoader";
import {ILocation} from "../types/LocationTypes";

import styled from "styled-components";
import {color, space, fontSize, fontWeight, width, flex,  boxShadow, borderRadius} from 'styled-system';
import theme from "../styles/theme";


interface IProps {
    locations: ILocation[];
    search: string
}

interface IList {
    m: number;
}

interface IListItem {
    mt: number;
    mb: number;
    mr: number;
    p: number;
    width: number[];
    boxShadow: string;
    borderRadius: string;
}

const List = styled.ul <IList> `
    ${space};    
    ${flex};
    max-width: ${theme.maxWidth};
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const ListItem = styled.li <IListItem> `
    ${width};
    ${space};
    ${boxShadow};
    ${borderRadius};
    display: flex;
`;

const Rating = styled.div <{}> `
    display: inline-flex;
`;

const ProductsList: React.SFC<IProps> = props => {
    const search = props.search;

    if(!props.locations) {
        return <div>Loading...</div>
    }

    console.log("locations", props.locations);

    return (
        <List m={3} >
            {props.locations.map(location => {
                if (!search || (search && location.name.toLowerCase().indexOf(search.toLowerCase()) > -1)) {
                    return (
                        <Link to={`/cafes/${location.id}`} key={location.id}>
                            <ListItem width={[ 1, 1, 1/2, 1/4, 1/4]}
                                      mt={3} mb={3} mr={1}
                                      p={1}
                                      boxShadow={theme.boxShadow}
                                      borderRadius={theme.borderRadius}>
                                <div>
                                    <Rating>
                                        <div>{location.rating}</div>
                                        <div>{location.review_count}</div>
                                    </Rating>

                                    <span>{location.name}</span>
                                    <div>{location.location.address1}</div>
                                    <div>{location.location.city}</div>
                                    <div>{location.is_closed}</div>
                                </div>
                                <img src={location.image_url}
                                     width={94}
                                     height={114}
                                />
                            </ListItem>
                        </Link>
                    )
                } else {
                    return null;
                }
            })}
        </List>
    )
};

export default withLoader(ProductsList);
