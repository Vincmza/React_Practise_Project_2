import React from 'react';
/*components*/
import {Link} from "react-router-dom"
import { StyledLink } from '../../utils/style/Atoms';

/*style*/
import styled from 'styled-components';

/*files*/
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
    width:30%;
    display: flex;
    justify-content: space-around;
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