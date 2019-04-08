export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    reviews:  IReview[]
}

export interface IReview {
    comment: string;
    reviewer: string;
}

export const products: IProduct[] = [
    {
        description: "A collection of navigational components that compose declarativly with your app",
        id: 1,
        name: "React Router",
        price: 8,
        reviews: [
            {
                comment: "Excellent! This is all I was hoping for!",
                reviewer: "Thom"
            },
            {
                comment: "The best router I have ever worked with",
                reviewer: "Kate"
            }
        ]
    },
    {
        description: "A library that helps manage state across your app",
        id: 2,
        name: "React Redux",
        price: 12,
        reviews: [
            {
                comment: "I found this really useful in large scale apps",
                reviewer: "Billy"
            },
            {
                comment: "Ä bit confusing at first but simple when you get use to it",
                reviewer: "Sally"
            }
        ]
    },
    {
        description: "A library that helps you interact with GraphQL backend",
        id: 3,
        name: "React Apollo",
        price: 12,
        reviews: [
            {
                comment: "Ï'll never work with REST API again",
                reviewer: "Stijn"
            },
            {
                comment: "It makes working with GraphQL backends a breeze",
                reviewer: "Kate"
            }
        ]
    }
];

const wait = (ms :number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

export const getProduct = async (id: number): Promise<IProduct | null> => {
    await wait(1000);
    const  foundProducts = products.filter(customer => customer.id === id);
    return foundProducts.length === 0 ? null : foundProducts[0]
};