import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from "styled-components";
import { useHistory } from 'react-router-dom'
import { setFetchSubDog } from '../../store/reducer/creator'
interface List {
    data: string[] | [],
    type: string
}

// interface Child {
//     subDog : string,
//     type: string
// }

export const WrapContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto auto;
    grid-gap: 10px;
    padding: 5em;
    p{
        padding: 4em;
        background-color: gray;
        border-radius: 2em;
        font-weight: bold;
        text-align: center;
        font-size: 1em;
        text-transform:capitalize
    };
`

const Card: React.FC<List> = ({ data, type }) => {
    const isLoading = useSelector((state: any) => state.isLoading)
    const dispatch = useDispatch()
    const h = useHistory()

    const goSubDog = (payload: string) => {
        localStorage.setItem('subDog', payload)
        h.push('/sub-dog/' + payload)
        dispatch(setFetchSubDog(payload))
    }
    if (isLoading) return <h1>loading...</h1>
    return (
        <>
            <WrapContainer>
                {
                    data.map((name, i) => {
                        return (
                            <>
                                {
                                    type === 'listDog' &&
                                    <p key={i} onClick={() => goSubDog(name)}>{name}</p>
                                }
                                {
                                    data.length >= 1 && type === 'sub-dog' &&
                                    <p key={i}>{name}</p>
                                }
                            </>
                        )
                    })
                }
            </WrapContainer>
        </>
    )
}

export default Card