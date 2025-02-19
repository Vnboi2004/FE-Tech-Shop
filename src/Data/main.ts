import { RiComputerLine } from 'react-icons/ri';
import { Advertisement, Categories, navbarTypes, productTodays, titleProducts } from "../Types/main";
import {Images, CategoriesIcon} from "./imageData";

// Link Navbar
export const navbarData: navbarTypes[] = [
    {
        id: 1,
        title: "Home",
        link: "#",
    },
    {
        id: 2,
        title: "Contact",
        link: "#",
    },
    {
        id: 3,
        title: "About",
        link: "#",
    },
    {
        id: 4,
        title: "Sign Up",
        link: "#",
    },

];

// Title products
export const titleProducts: titleProducts[] = [
    // Update coding...
    {
        id: 1,
        title: "Woman’s Fashion",
    },
    // Update coding...
    {
        id: 2,
        title: "Men's Fashion",
    },
    {
        id: 3,
        title: "Electronics",
    },
    {
        id: 4,
        title: "Home & Lifestyle",
    },
    {
        id: 5,
        title: "Medicine",
    },
    {
        id: 6,
        title: "Sports & Outdoor",
    },
    {
        id: 7,
        title: "Baby’s & Toys",
    },
    {
        id: 8,
        title: "Groceries & Pets",
    },
    {
        id: 9,
        title: "Health & Beauty",
    },
];


export const advertisementData: Advertisement[] = [
    { id: 1, title: "iPhone 14 Series", discount: "Up to 10% off Voucher" },
    { id: 2, title: "iPhone 15 Series", discount: "Up to 12% off Voucher" },
    { id: 3, title: "MacBook Air", discount: "Save up to $200" },
    { id: 4, title: "Apple Watch", discount: "Get 15% off" },
    { id: 5, title: "AirPods Max", discount: "Get 25% off" },
];


export const productTodayData: productTodays[] = [
    {
        id: 1, 
        nameProduct: "HAVIT HV-G92 Gamepad",
        priceProduct: "$120",
        originalPrice: "$160",
        star: 5,
        quantityStar: 88,
        discount: "-40%",
        imgae:  Images.product01_today,
        alt: "",
    },
    {
        id: 2, 
        nameProduct: "AK-900 Wired Keyboard",
        priceProduct: "$960",
        originalPrice: "$1160",
        star: 4,
        quantityStar: 75,
        discount: "-35%",
        imgae:  Images.product02_today,
        alt: "",
    },
    {
        id: 3, 
        nameProduct: "IPS LCD Gaming Monitor",
        priceProduct: "$370",
        originalPrice: "$400",
        star: 5,
        quantityStar: 99,
        discount: "-40%",
        imgae: Images.product03_today,
        alt: "",
    },
    {
        id: 4, 
        nameProduct: "HAVIT HV-G92 Gamepad",
        priceProduct: "$120",
        originalPrice: "$160",
        star: 5,
        quantityStar: 88,
        discount: "-40%",
        imgae: Images.product04_today,
        alt: "",
    },
    {
        id: 5, 
        nameProduct: "HAVIT HV-G92 Gamepad",
        priceProduct: "$120",
        originalPrice: "$160",
        star: 5,
        quantityStar: 88,
        discount: "-40%",
        imgae: Images.product05_today,
        alt: "",
    },
    {
        id: 6, 
        nameProduct: "HAVIT HV-G92 Gamepad",
        priceProduct: "$120",
        originalPrice: "$160",
        star: 5,
        quantityStar: 88,
        discount: "-40%",
        imgae: Images.product06_today,
        alt: "",
    },
    {
        id: 7, 
        nameProduct: "HAVIT HV-G92 Gamepad",
        priceProduct: "$120",
        originalPrice: "$160",
        star: 5,
        quantityStar: 88,
        discount: "-40%",
        imgae: Images.product07_today,
        alt: "",
    },

];


export const categoriesData: Categories[] = [
    { id: 1, icon: CategoriesIcon.IoPhonePortraitOutline, name: "Phones" },
    {id: 2, icon: CategoriesIcon.RiComputerLine, name: "Computers" },
    { id: 3, icon: CategoriesIcon.BsSmartwatch, name: "SmartWatch" },
    { id: 4, icon: CategoriesIcon.CiCamera, name: "Camera" },
    { id: 5, icon: CategoriesIcon.IoHeadsetOutline, name: "HeadPhones" },
    { id: 7, icon: CategoriesIcon.IoGameControllerOutline, name: "Gaming" },
    { id: 8, icon: CategoriesIcon.IoGameControllerOutline, name: "Gaming" },
    { id: 10, icon: CategoriesIcon.IoGameControllerOutline, name: "Gaming" },
    { id: 11, icon: CategoriesIcon.IoGameControllerOutline, name: "Gaming" },
    { id: 12, icon: CategoriesIcon.IoGameControllerOutline, name: "Gaming" },
    { id: 13, icon: CategoriesIcon.IoGameControllerOutline, name: "Gaming" },
    { id: 14, icon: CategoriesIcon.IoGameControllerOutline, name: "Gaming" },
    { id: 15, icon: CategoriesIcon.IoGameControllerOutline, name: "Gaming" },
    { id: 16, icon: CategoriesIcon.IoGameControllerOutline, name: "Gaming" },
    { id: 17, icon: CategoriesIcon.IoGameControllerOutline, name: "Gaming" },
    { id: 18, icon: CategoriesIcon.IoGameControllerOutline, name: "Gaming" },
];