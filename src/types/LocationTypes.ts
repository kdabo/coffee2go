export interface ILocation {
    id: number;
    name: string;
    price: string;
    description: string;
    reviews:  IReview[];
    pathname: string;
    search: string;
    state: object;
    hash: string;
}

export interface IReview {
    comment: string;
    reviewer: string;
}

// export const getProduct = async (id: number): Promise<IProduct | null> => {
//     const  foundProducts = products.filter(customer => customer.id === id);
//     return foundProducts.length === 0 ? null : foundProducts[0]
// };
