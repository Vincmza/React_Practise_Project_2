import React, { useContext } from "react";
import { SurveyContext } from "../../utils/context";

const Results = () => {
    const { answers } = useContext(SurveyContext)
    console.log(answers)
    return (
        <div>
        </div>
    );
};

export default Results;