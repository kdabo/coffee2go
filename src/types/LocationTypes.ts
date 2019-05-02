export interface ILocation {
    id: number;
    name: string;
    address1: string;
    city: string;
    hours: IHours;
    display_phone: string;
    location: {
       address1: string;
       city: string
    };
    price: string;
    review_count: number;
    rating: number;
    reviews:  IReview[];
    is_closed: boolean;
    image_url: string;
    pathname: string;
    search: string;
    state: object;
    hash: string;
}

export interface IHours {
    open: [],
    hours_type: string,
    is_open_now: boolean
}

export interface IReview {
    comment: string;
    reviewer: string;
}
