import { useEffect, useState } from "react";
import { getGits } from "../helpers/getGifs";


export const useFetchGifs = (category) => {

    const [ images, setImages ] = useState( [] );
    const [ isLoading, setIsLoading ] = useState( true );

    const getImages = async() => {
        const newImages = await getGits ( category );
        setImages(newImages);
        setIsLoading( false );
    }

    useEffect( () => {
        getImages ();
    }, [], )

    return{
        images,
        isLoading,


    };
};