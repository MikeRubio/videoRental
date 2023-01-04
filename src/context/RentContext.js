import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { RENT_LOCAL_STORAGE_KEY } from "../utils/constants";

const RentContext = createContext();

export function RentProvider({ children }) {
    const [rented, setRented] = useLocalStorage(RENT_LOCAL_STORAGE_KEY, [])

    const addVideoToRented = (video) => {
        const parsedArray = rented ? rented : [];
        const newArray = [...parsedArray, video];
        setRented(newArray);
    }

    const removeVideoFromRented = (video) => {
        const newArray = rented.filter(elm => elm.id !== video.id);
        setRented(newArray);
    }

    return <RentContext.Provider value={{ rented, addVideoToRented, removeVideoFromRented }}>{children}</RentContext.Provider>
}

export default RentContext;