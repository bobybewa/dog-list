import React, { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { setLoading } from '../../store/reducer/action'
import Images from '../../components/images'
import Pagination from '../../components/pagination'
import BackButton from '../../components/buttonBack'
const ImagesDog = () => {
    const dispatch = useDispatch()
    const isLoading = useSelector((state:any) => state.isLoading)
    const [images, setImages] = useState([])
    const [currentShow, setCurrentShow] = useState(1)
    const [showImages] = useState(50)
    React.useEffect(() => {
        const fetchImages = () => {
            dispatch(setLoading(true))
            fetch('https://dog.ceo/api/breed/hound/images')
            .then(res => res.json())
            .then(data => {
                setImages(data.message)
            })
            .catch(err => {
                window.console = err
            })
            .finally(() => {
                dispatch(setLoading(false))
            })
        }
        fetchImages()
    },[])

    const lastOfImages = currentShow * showImages
    const firstOfImages = lastOfImages - showImages
    const currentShowImages = images.slice(firstOfImages, lastOfImages)
    const paginate = (page:number) => {
        setCurrentShow(page)
    } 
    if(isLoading) return <h1>loading...</h1>
    return(
        <>
            <BackButton/>
            <h1 style={{textAlign:'center'}}>Gallery Dogs</h1>
            <Images images={currentShowImages}/>
            <Pagination show={showImages} totalImages={images.length} paginate={paginate}/>
        </>
    )
}

export default ImagesDog