import React from 'react';
import DefaultPicture from '../../assests/profile.png'

/*components*/
import Card from '../../components/Card';

/*style*/
import styled from 'styled-components';
import colors from '../../utils/style/colors';
 
const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
        picture: DefaultPicture,
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
        picture: DefaultPicture,
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
        picture: DefaultPicture,
    },
    {
        name: 'Emmanuel Macron',
        jobTitle: 'Enculeur de mouches',
        picture: DefaultPicture
    }
]
const CardWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`
const CardContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 50%;
`
const FreelanceTitle = styled.h1`
    font-size:1.3em;
    margin-bottom:50px;
`
const FreelanceSentence = styled.p`
    font-size:0.9em;
    margin-bottom:50px;
    color: ${colors.secondary}
`

function Freelances() {
    return (
        <CardWrapper>
            <FreelanceTitle>Trouver votre prestataire</FreelanceTitle>
            <FreelanceSentence>Chez Shiny nous réunissons les meilleurs profils pour vous</FreelanceSentence>
            <CardContainer>
            {freelanceProfiles.map((profile, index) => (
                <Card
                    key={`${profile.name}-${index}`}
                    label={profile.jobTitle}
                    picture={profile.picture}
                    title={profile.name}
                />
            ))}
            </CardContainer>
            
        </CardWrapper>
    )
}
export default Freelances;