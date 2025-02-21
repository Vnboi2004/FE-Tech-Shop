import { IconType } from "react-icons";

export interface navbarTypes {
    id: number;
    title: string;
    link: string;
};

export interface titleProducts {
    id: number;
    title: string;
};

export interface Advertisement {
    id: number;
    title: string;
    discount: string;
};

export interface productTodays {
    id: number;
    nameProduct: string;
    priceProduct: string;
    originalPrice: string;
    star: number;
    quantityStar: number;
    discount: string;
    imgae: string;
    
};

export interface Categories {
    id: number;
    icon: IconType;
    name: string;
};

export interface BestSeleProducts {
    id: number;
    image: string;
    alt: string;
    name: string;
    price: string;
    originalPrice: string;
    star: number;
    quantityStar: number;
};

export interface OurProducts {
    id: number;
    image: string;
    alt: string;
    name: string;
    price: string;
    originalPrice: string;
    star: number;
    quantityStar: number;
};

export interface Featured {
    id: number;
    image: string;
    alt: string;
    name: string;
    discription: string;
};