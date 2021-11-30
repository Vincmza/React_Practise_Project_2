import React from 'react';
import { useParams } from 'react-router';
/*components*/
import { Link } from 'react-router-dom';
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
    display: flex;
    justify-content:center;
    font-size: 1.3em;
    text-decoration: underline ${colors.primary}
`
const Response = styled.div`
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


const Survey = () => {
    let {questionNumber} = useParams()
    let questionParsint = parseInt(questionNumber)
    let previousQuestion = questionParsint - 1
    let nextQuestion = questionParsint + 1

    return (
        <SurveyWrapper>
            <div>
                <QuestionTitle>Question {questionParsint}</QuestionTitle>
                <p>Votre application doit elle impérativement apparaître en premier dans les résultats de recherche ?</p>
            </div>
            <Response>
                <YesOrNo>Oui</YesOrNo>
                <YesOrNo>Non</YesOrNo>
            </Response>
            <div>
                {questionNumber > 1 && <Link to={`/survey/${previousQuestion}`}>Précédent</Link>}               
                <Link to={`/survey/${nextQuestion}`}>Suivant</Link>
            </div>
        </SurveyWrapper>
    );
};

export default Survey;