import React from 'react';
/*components*/
import {Link} from "react-router-dom"

/*style*/
import styled from 'styled-components';

/*files*/
import colors from '../../utils/style/colors';

const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${props => props.$isFullLink && `color: white; border-radius: 30px; background-color: ${colors.primary};`}    
`
const Header = () => {
    return (
        <nav>
            <StyledLink to="/">Accueil</StyledLink>
            <StyledLink to="/survey/42" $isFullLink>Faire le test</StyledLink>
            <StyledLink to="/results">Résultats</StyledLink>
            <StyledLink to="/freelances">Freelances</StyledLink>
        </nav>
    );
};

export default Header;