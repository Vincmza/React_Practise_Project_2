import colors from "./colors";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 1em;
    ${props => props.$isFullLink && `color: white; border-radius: 30px; background-color: ${colors.primary};`}    
`