import React from 'react'
import { useSelector } from 'react-redux'
import styled from "styled-components";
interface Img {
    images: string[]
}


const Container = styled.div`
    .container{
        position: relative;
        width: auto;
        display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto auto;
    grid-gap: 10px;
    }
    .container:after {
        content: "";
        display: block;
        padding-bottom: 100%; 
    }
    .container img {
        // position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0; 
        width: 100%;
        height: 100%;
        object-fit: cover; 
        object-position: center;
      }
` 

const Images: React.FC<Img> = ({ images }) => {
    const isLoading = useSelector((state: any) => state.isLoading)
    if (isLoading) return <h1>Loading...</h1>
    return (
        <Container>
        <div className="container">
            {
                images.map(img => {
                    return(
                        <img src={img} alt="" />
                    )
                })
            }
        </div>
        </Container>
    )
}

export default Images