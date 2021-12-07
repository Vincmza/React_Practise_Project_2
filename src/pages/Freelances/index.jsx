import React, { useEffect, useState } from 'react';
import DefaultPicture from '../../assests/profile.png'

/*components*/
import Card from '../../components/Card';

/*style*/
import styled from 'styled-components';
import colors from '../../utils/style/colors';

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
    const [profiles, setProfiles]=useState([])

    useEffect(()=>{
        fetch(`http://localhost:8000/freelances`)
        .then((response)=> response.json())
        .then(profiles => setProfiles(profiles.freelancersList))
        .catch(error=>{
            console.log(error)
        })            
    }, [])
    console.log(profiles)

    return (
        <CardWrapper>
            <FreelanceTitle>Trouver votre prestataire</FreelanceTitle>
            <FreelanceSentence>Chez Shiny nous réunissons les meilleurs profils pour vous</FreelanceSentence>
            <CardContainer>
            {profiles.map((profile, index) => (
                <Card
                    key={`${profile.name}-${index}`}
                    label={profile.job}
                    picture={profile.picture}
                    title={profile.name}
                />
            ))}
            </CardContainer>
            
        </CardWrapper>
    )
}
export default Freelances;