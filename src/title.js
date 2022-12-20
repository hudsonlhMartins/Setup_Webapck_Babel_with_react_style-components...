import React from "react"
import styled from "styled-components"
import BartUser from './images/bart-simpson.png'

const MyTitle = styled.h1`
    color: red;
    height: 100px;
    width: 100px;
`
const User = styled.div`
    height: 500px;
    width: 500px;
    background: no-repeat url(${BartUser}) center transparent;
`

export const Title = ({name})=>{

    return (
        <>
            <User/>
            <MyTitle>Ola {name}</MyTitle>
        </>
    )
    
}