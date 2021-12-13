import React from "react";
import styled from "styled-components";

/*components*/
import { StyledLink } from "../../utils/style/Atoms";

/*file*/
import HomeIllustration from "../../assests/home-illustration.svg"
import colors from "../../utils/style/colors";

const HomeWrapper = styled.div`
  display: flex;
  justify-content:center;
`
const HomeContainer = styled.div`
  margin: 30px;
  background-color: ${colors.backgroundLight};
  padding: 60px 90px;
  display: flex;
  flex-direction: row;
  max-width: 1200px;
`
const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  ${StyledLink} {
    max-width: 150px;
  }
`
const StyledTitle = styled.h1`
  padding-bottom: 30px;
  max-width: 350px;
  line-height: 50px;
`
const Illustration = styled.img`
  flex: 1;
`

function Home() {
  return (
    <HomeWrapper>
      <HomeContainer>
        <LeftCol>        
          <StyledTitle>Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents</StyledTitle>       
          <StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
        </LeftCol>
        <Illustration src={HomeIllustration}/>
      </HomeContainer>
    </HomeWrapper>
  );
}

export default Home;
