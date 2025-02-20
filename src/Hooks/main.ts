import { useRef, useState } from "react"
import { advertisementData } from "../Data/main"

export default function useMain() {

    const [currentPage, setCurrentPage] = useState(1);

    // Today
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);
    
    // Category
    const prevRefCategories =  useRef<HTMLButtonElement | null>(null);
    const nextRefCategories = useRef<HTMLButtonElement | null>(null);

    return {
        currentPage,
        setCurrentPage,
        prevRef,
        nextRef,
        prevRefCategories,
        nextRefCategories,
    };
};