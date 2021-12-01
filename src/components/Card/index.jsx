import React from 'react';
import PropTypes from "prop-types"

/*style*/
import styled from "styled-components"

/*files*/
import DefaultPicture from "../../assests/profile.png"
import colors from '../../utils/style/colors';

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    margin-bottom: 80px;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    width: 350px;
    height:350px
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`

const CardLabel = styled.span`
    color: #5843e4;
    font-size: 1em;
    margin-bottom:30px;
    width:50%;
`
const CardImage = styled.img`
    height: 150px;
    width: 150px;
    border-radius: 50%;
`
const Title = styled.span`
    margin-top:30px;
`

function Card({ label, title, picture }) {
    return (
        <CardWrapper>
            <CardLabel>{label}</CardLabel>
            <CardImage src={picture} alt="freelance"/>
            <Title>{title}</Title>
        </CardWrapper>
    )
}
Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired 
}
Card.defaultProps = {
    label: "",
    title: "",
    picture: DefaultPicture
}
 
export default Card