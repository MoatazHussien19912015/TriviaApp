import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { init } from './../../store/actions/questionActions';
import { useHistory } from 'react-router-dom';
const ResultPage = () => {
    const dispatch = useDispatch();
    const answers = useSelector(state => state.questionsReducer.answers);
    const score = useSelector(state => state.questionsReducer.score);
    const history = useHistory();

    useEffect(() => {
        if (!score) { startAgain(); }
    }, [score]);
    const startAgain = () => {
        dispatch(init());
        history.push('/quiz');
    };
    return (
        <Card style={{ paddingTop: '20px', paddingLeft: '100px' }}>
            <Card.Title style={{ textAlign: 'center' }}>
                You scored {score} / 10
            </Card.Title>
            <Card.Body>
                <div style={{ margin: '0 auto' }}>
                    {answers.map(answer => (<p style={{ color: answer.user_success ? 'green' : 'red' }}>{answer.question} {`Corret Answer ${answer.correct_answer} `}</p>))}
                    <h3 style={{ textAlign: 'center', cursor: 'pointer' }} onClick={startAgain}>Play Again?</h3>
                </div>
            </Card.Body>
        </Card>

    )
}

export default ResultPage;
