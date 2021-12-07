import React, { useContext } from "react";
import { useParams } from "react-router";
/*components*/
import { Link } from "react-router-dom";
import { Loader } from "../../utils/style/Atoms";
import { SurveyContext } from "../../utils/context";
import { useFetch } from "../../utils/hooks/index"
/*flies*/
import colors from "../../utils/style/colors";
/*styled*/
import styled from "styled-components";

const SurveyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 90px;
`;
const QuestionTitle = styled.h1`
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    font-size: 1.3em;
    text-decoration: underline ${colors.primary};
`;
const Question = styled.div`
    margin-bottom: 50px;
    font-size: 0.9em;
`;
const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`
const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
const Button = styled(Link)`
    text-decoration: underline;
    color: black;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 400px;
`;
const NextAndPrev = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
`;

const Survey = () => {
    /*storing param*/
    let { questionNumber } = useParams();
    /*make sure it is a number*/
    let questionParsint = parseInt(questionNumber);
    /*previous button*/
    let previousQuestion = questionParsint - 1;
    /*next button*/
    let nextQuestion = questionParsint + 1;
    /*storing replies from user*/
    const { answers, saveAnswers } = useContext(SurveyContext)

    function saveReply(answer) {
    saveAnswers({ [questionParsint]: answer })
    }
    /*hook getting data from API*/
    const { data, isLoading, error } = useFetch(`http://localhost:8000/survey`)
    const { surveyData } = data
    
    if (error) {
        return <span>Oups il y a eu un problème</span>
    }
    return (
        <SurveyWrapper>
            <div>
                <QuestionTitle>Question {questionParsint}</QuestionTitle>
            </div>
            {isLoading ? <Loader /> : <Question>{surveyData && surveyData[questionParsint]}</Question>}
            <ReplyWrapper>
                <ReplyBox
                    onClick={() => saveReply(true)}
                    isSelected={answers[questionParsint] === true}
                >
                    Oui
                </ReplyBox>
                <ReplyBox
                    onClick={() => saveReply(false)}
                    isSelected={answers[questionParsint] === false}
                >
                    Non
                </ReplyBox>
            </ReplyWrapper>
            <ButtonContainer>
                <NextAndPrev>
                    {questionNumber > 1 && (
                        <Button to={`/survey/${previousQuestion}`}>Précédente</Button>
                    )}
                </NextAndPrev>
                <NextAndPrev>
                    {questionParsint < 6 ? (
                        <Button to={`/survey/${nextQuestion}`}>Suivante</Button>
                    ) : (
                        <Button to="/results">Résultats</Button>
                    )}
                </NextAndPrev>
            </ButtonContainer>
        </SurveyWrapper>
    );
};

export default Survey;
