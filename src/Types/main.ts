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
    alt: string;
};

export interface Categories {
    id: number;
    icon: IconType;
    name: string;
};