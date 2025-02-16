import { useState } from "react"
import { advertisementData } from "../Data/main"

export default function useMain() {

    const [currentPage, setCurrentPage] = useState(1);

    return {
        currentPage,
        setCurrentPage,
    }
}