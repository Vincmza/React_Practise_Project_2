import React, { useState } from 'react';
import { useParams } from 'react-router';

const Survey = () => {
    let {questionNumber} = useParams()

    return (
        <div>
            <div className="buttons">
                {questionNumber > 1 && <button className="previous-btn">Précédent</button>}               
                <button className="then-btn">Suivant</button>
            </div>
            <h1>Questionnaire</h1>
            <h2>Question : {questionNumber}</h2>
        </div>
    );
};

export default Survey;