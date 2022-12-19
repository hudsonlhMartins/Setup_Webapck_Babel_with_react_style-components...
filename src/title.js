import React from "react"
import styled from "styled-components"


const MyTitle = styled.h1`
    color: red;
`

export const Title = ({name})=>{

    return <MyTitle>Ola {name}</MyTitle>
    
}