import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFetchSubDog } from '../../store/reducer/creator'
import styled from "styled-components";
// import { useHistory } from 'react-router'
import Card from '../../components/card/card'
import BackButton from '../../components/buttonBack'
const H = styled.h1`
    text-align: center;
    text-transform:capitalize
    // background-color: red;
`

const SubDogPage = () => {
    const dispatch = useDispatch()
    // const h = useHistory()
    const data = useSelector((state: any) => state.listSubDog)
    const isLoading = useSelector((state: any) => state.isLoading)
    const subDog = localStorage.getItem('subDog')
    React.useEffect(() => {
        if (subDog) {
            dispatch(setFetchSubDog(subDog))
        }
    }, [subDog])

    if (isLoading) return <H>loading...</H>
    return (
        <>
            {/* <ButtonBack onClick={() => h.push('/')}>back to list dog</ButtonBack> */}
            <BackButton/>
            <H>{subDog}</H>
            {
                data.length < 1 ? <H>empty sub dog</H> : <Card data={data} type="sub-dog" />
            }
        </>
    )
}

export default SubDogPage