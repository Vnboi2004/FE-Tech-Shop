import { useRef, useState } from "react"
import { advertisementData } from "../Data/main"

export default function useMain() {

    const [currentPage, setCurrentPage] = useState(1);

    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);
    

    return {
        currentPage,
        setCurrentPage,
        prevRef,
        nextRef,
    };
};