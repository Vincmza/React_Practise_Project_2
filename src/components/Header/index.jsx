import React from 'react';
/*components*/
import {Link} from "react-router-dom"

/*style*/
import styled from 'styled-components';

/*files*/
import colors from '../../utils/style/colors';
import HeaderLogo from "../../assests/dark-logo.png"

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
`
const Logo = styled.img`
    height: 70px
`
const Menu = styled.div`
    width:50%;
    display: flex;
    justify-content: flex-end;
`
const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    padding: 5px 10px;
    color: #8186a0;
    text-decoration: none;
    font-size: 1em;
    ${props => props.$isFullLink && `color: white; border-radius: 30px; background-color: ${colors.primary};`}    
`
const Header = () => {
    return (
        <Nav>
            <Link to="/"><Logo src={HeaderLogo} alt="shiny-agency-logo"/></Link>
            <Menu>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/freelances">Profils</StyledLink>
                <StyledLink to="/survey/42" $isFullLink>Faire le test</StyledLink>
                {/* <StyledLink to="/results">Résultats</StyledLink>            */}
            </Menu>
        </Nav>
    );
};

export default Header;