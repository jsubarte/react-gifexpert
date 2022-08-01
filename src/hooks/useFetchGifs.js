import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const getImages = async() => {
        const newImages = await getGifs( category )
        setImages(newImages)
        setIsLoading(false)
    }
    useEffect( () => { getImages() }, [] ) //[]: Hace que solo se ejecute la primera vez que se crea el elemento

    return {
        images,
        isLoading
    }
}
