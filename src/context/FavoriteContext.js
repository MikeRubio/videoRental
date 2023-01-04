import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { FAVORITE_LOCAL_STORAGE_KEY } from "../utils/constants";

const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
    const [addToFavorite, setAddToFavorite] = useLocalStorage(FAVORITE_LOCAL_STORAGE_KEY, [])

    const addVideoToFavorite = (video) => {
        const parsedArray = addToFavorite ? addToFavorite : [];
        const newArray = [...parsedArray, video];
        setAddToFavorite(newArray);
    }

    const removeVideoFromFavorite = (video) => {
        const newArray = addToFavorite.filter(elm => elm.id !== video.id);
        setAddToFavorite(newArray);
    }

    return <FavoriteContext.Provider value={{ addToFavorite, addVideoToFavorite, removeVideoFromFavorite }}>{children}</FavoriteContext.Provider>
}

export default FavoriteContext;