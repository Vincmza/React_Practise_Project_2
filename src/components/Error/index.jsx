import React from 'react';
import styled from 'styled-components';
import ErrorImage from "../../assests/404.svg"

const ErrorContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
`
const ImageSize = styled.img`
    width:350px;
    height:350px;
`
const ErrorMsg = styled.h1`
    font-size:1.2em;
    text-align: center;
`

const Error = () => {
    return (
        <ErrorContainer>
            <ImageSize src={ErrorImage}/>
            <ErrorMsg>Il semblerait qu'il y ait une erreur</ErrorMsg>
        </ErrorContainer>
    );
};

export default Error;