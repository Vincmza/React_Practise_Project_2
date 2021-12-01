import colors from "./colors";
import { Link } from "react-router-dom";
import styled, {keyframes} from "styled-components";

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

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Loader = styled.div`
  padding: 10px;
  border: 6px solid ${colors.primary};
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
`