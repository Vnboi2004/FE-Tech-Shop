import { RiComputerLine } from 'react-icons/ri';
import { Advertisement, BestSeleProducts, Categories, Featured, navbarTypes, OurProducts, productTodays, titleProducts } from "../Types/main";
import {Images, CategoriesIcon, ThisMonthImage, ourProductsImage, FeaturedImage } from "./imageData";

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
    { id: 2, icon: CategoriesIcon.RiComputerLine, name: "Computers" },
    { id: 3, icon: CategoriesIcon.BsSmartwatch, name: "SmartWatch" },
    { id: 4, icon: CategoriesIcon.CiCamera, name: "Camera" },
    { id: 5, icon: CategoriesIcon.AiOutlineMedicineBox, name: "HeadPhones" },
    { id: 6, icon: CategoriesIcon.CiDesktop, name: "Gaming" },
    { id: 7, icon: CategoriesIcon.CiDesktop, name: "Gaming" },
    { id: 8, icon: CategoriesIcon.CiDesktop, name: "Gaming" },
    { id: 9, icon: CategoriesIcon.IoGameControllerOutline, name: "Gaming" },
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


export const bestSeleProductsData: BestSeleProducts[] = [
    { id: 1, image: ThisMonthImage.thisMonth01, alt: "", name: "The north coat", price: "$260", originalPrice: "$360", star: 1, quantityStar: 65,},
    { id: 2, image: ThisMonthImage.thisMonth02, alt: "", name: "Gucci duffle bag", price: "$960", originalPrice: "$1160", star: 4, quantityStar: 60,},
    { id: 3, image: ThisMonthImage.thisMonth03, alt: "", name: "RGB liquid CPU Cooler", price: "$160", originalPrice: "$170", star: 3, quantityStar: 75,},
    { id: 4, image: ThisMonthImage.thisMonth04, alt: "", name: "Small BookSelf", price: "$360", originalPrice: "", star: 2, quantityStar: 10,},
];


export const ourProductsData: OurProducts[] = [
    { id: 1, image: ourProductsImage.ourProduct01, alt: "", name: "The north coat", price: "$260", originalPrice: "$360", star: 1, quantityStar: 65,},
    { id: 2, image: ourProductsImage.ourProduct02, alt: "", name: "Gucci duffle bag", price: "$960", originalPrice: "$1160", star: 4, quantityStar: 60,},
    { id: 3, image: ourProductsImage.ourProduct03, alt: "", name: "RGB liquid CPU Cooler", price: "$160", originalPrice: "$170", star: 3, quantityStar: 75,},
    { id: 4, image: ourProductsImage.ourProduct04, alt: "", name: "Small BookSelf", price: "$360", originalPrice: "", star: 2, quantityStar: 10,},
    { id: 5, image: ourProductsImage.ourProduct05, alt: "", name: "The north coat", price: "$260", originalPrice: "$360", star: 1, quantityStar: 65,},
    { id: 6, image: ourProductsImage.ourProduct06, alt: "", name: "Gucci duffle bag", price: "$960", originalPrice: "$1160", star: 4, quantityStar: 60,},
    { id: 7, image: ourProductsImage.ourProduct07, alt: "", name: "RGB liquid CPU Cooler", price: "$160", originalPrice: "$170", star: 3, quantityStar: 75,},
    { id: 8, image: ourProductsImage.ourProduct08, alt: "", name: "Small BookSelf", price: "$360", originalPrice: "", star: 2, quantityStar: 10,},
    
    { id: 9,  image: ourProductsImage.product01_today, alt: "", name: "The north coat", price: "$260", originalPrice: "$360", star: 1, quantityStar: 65,},
    { id: 10, image: ourProductsImage.product02_today, alt: "", name: "Gucci duffle bag", price: "$960", originalPrice: "$1160", star: 4, quantityStar: 60,},
    { id: 11, image: ourProductsImage.product03_today, alt: "", name: "RGB liquid CPU Cooler", price: "$160", originalPrice: "$170", star: 3, quantityStar: 75,},
    { id: 12, image: ourProductsImage.product04_today, alt: "", name: "Small BookSelf", price: "$360", originalPrice: "", star: 2, quantityStar: 10,},
    { id: 13, image: ourProductsImage.product05_today, alt: "", name: "The north coat", price: "$260", originalPrice: "$360", star: 1, quantityStar: 65,},
    { id: 14, image: ourProductsImage.product06_today, alt: "", name: "Gucci duffle bag", price: "$960", originalPrice: "$1160", star: 4, quantityStar: 60,},
    { id: 15, image: ourProductsImage.product07_today, alt: "", name: "RGB liquid CPU Cooler", price: "$160", originalPrice: "$170", star: 3, quantityStar: 75,},
    { id: 16, image: ourProductsImage.thisMonth02, alt: "", name: "Small BookSelf", price: "$360", originalPrice: "", star: 2, quantityStar: 10,},
];


export const featuredData: Featured[] = [
    { id: 1, image: FeaturedImage.Featured05, alt: "", name: "FREE AND FAST DELIVERY", discription: "Free delivery for all orders over $140"},
    { id: 2, image: FeaturedImage.Featured06, alt: "", name: "24/7 CUSTOMER SERVICE", discription: "Friendly 24/7 customer support"},
    { id: 3, image: FeaturedImage.Featured07, alt: "", name: "MONEY BACK GUARANTEE", discription: "We reurn money within 30 days"},
];