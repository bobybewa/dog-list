import React from 'react'
import styled from 'styled-components'
interface Page {
    show: number,
    totalImages: number,
    paginate: any
}

const List = styled.div`
    ul{
        list-style-type: none;
        margin: 0;
        padding: 0;
        // overflow: hidden;
        // background-color: #333333;
        // text-align:center
    };
    li{
        float: left;
    };
    li a {
        display: block;
        color: black;
        text-align: center;
        padding: 16px;
        text-decoration: none;
    }; 
    li a:hover {
        background-color: #111111;
    }
`

const Pagination: React.FC<Page> = ({ show, totalImages, paginate }) => {
    const pages = []
    for (let i = 1; i <= Math.ceil(totalImages / show); i++) {
        pages.push(i)
    }
    return (
        <List>
            <ul>
                {
                    pages.map(page => {
                        return (
                            <li key={page}>
                                <a onClick={() => paginate(page)}>{page}</a>
                            </li>
                    )
                    })
                }
            </ul>
        </List>
    )
}

export default Pagination