import * as React from 'react';
import { Link } from "react-router-dom";
import withLoader from "../hoc/withLoader";
import {ILocation} from "../types/LocationTypes";

interface IProps {
    locations: ILocation[];
    search: string
}

const ProductsList: React.SFC<IProps> = props => {
    const search = props.search;
    return (
        <ul className="product-list">
            {props.locations.map(location => {
                if (!search || (search && location.name.toLowerCase().indexOf(search.toLowerCase()) > -1)) {
                    return (
                        <li key={location.id} className="product-list-item">
                            <Link to={`/products/${location.id}`}> {location.name} </Link>
                        </li>
                    )
                } else {
                    return null;
                }
            })}
        </ul>
    )
};

export default withLoader(ProductsList);
