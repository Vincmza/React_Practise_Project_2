import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
/*components*/
import { Link } from 'react-router-dom';
import { Loader } from '../../utils/style/Atoms'
/*flies*/
import colors from '../../utils/style/colors';

import styled from 'styled-components';

const SurveyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    padding:90px;
`
const QuestionTitle = styled.h1`
    margin-bottom: 30px;
    display: flex;
    justify-content:center;
    font-size: 1.3em;
    text-decoration: underline ${colors.primary}
`
const Question = styled.div`
    margin-bottom: 50px;
    font-size: 0.9em;
`
const Response = styled.div`
    margin-bottom: 50px;
    display:flex;
    justify-content: space-between;
    width: 50%;
`
const YesOrNo = styled.span`
    border: 1px solid ${colors.primary};
    border-radius: 20px;
    width:30%;
    height: 60px;
    display:flex;
    align-items:center;
    justify-content:center;
`
const Button = styled(Link)`
    text-decoration: underline;
    color:black;
    margin-top:20px;
    display:flex;
    align-items:center;
    justify-content: center;
`
const ButtonContainer = styled.div`
    display:flex;
    justify-content: space-between;
    width:400px;
`
const NextAndPrev = styled.div`
    width:50%;
    display:flex;
    justify-content: center;
`

const Survey = () => {
    /*storing param*/
    let {questionNumber} = useParams()
    /*make sure it is a number*/
    let questionParsint = parseInt(questionNumber)
    /*previous button*/
    let previousQuestion = questionParsint - 1
    /*next button*/
    let nextQuestion = questionParsint + 1
    /*storing data from API*/
    const [isDataLoading, setIsDataLoading] = useState(false)
    const [questions, setQuestions] = useState({})

    /*get survey data from API*/
    useEffect(() => {
        fetch(`http://localhost:8000/survey`)
             .then((response) => response.json()
             .then((surveyData) => {
                setQuestions(surveyData.surveyData)
                setIsDataLoading(false)
             })
             .catch((error) => {
                console.log(error)
                setIsDataLoading(true)
             })
         )
     }, [])
    return (
        <SurveyWrapper>
            <div>
                <QuestionTitle>Question {questionParsint}</QuestionTitle>               
            </div>
            {isDataLoading ? ( 
                <Loader/>
            ) : (<Question>{questions[questionParsint]}</Question>)}
            <Response>
                <YesOrNo>Oui</YesOrNo>
                <YesOrNo>Non</YesOrNo>
            </Response>
            <ButtonContainer>
                <NextAndPrev>
                    {questionNumber > 1 && <Button to={`/survey/${previousQuestion}`}>Précédente</Button>}
                </NextAndPrev>
                <NextAndPrev>            
                    {questionParsint < 6 ? <Button to={`/survey/${nextQuestion}`}>Suivante</Button> : <Button to="/results">Résultats</Button> }
                </NextAndPrev>                               
            </ButtonContainer>
        </SurveyWrapper>
    );
};

export default Survey;