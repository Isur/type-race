import React from 'react';

const ScoreTable = (props) => {
    return(
        <div>
            {props.scores && props.scores.map(score => (
                <p key={Math.random() * score.nickname.length*score.score}>{score.nickname} || {score.score}</p>
            ))}
        </div>
    )
}

export default ScoreTable;