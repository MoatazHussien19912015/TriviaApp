import React, { useState, useEffect } from 'react';
import { Card, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestions, addAnswer, addScore } from './../../store/actions/questionActions';
import Spinner from 'react-bootstrap/Spinner';
import { useHistory } from 'react-router-dom';
const QuizPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const questions = useSelector(state => state.questionsReducer.questions);
    const [question, setQuestion] = useState({});
    const [choice, setChoice] = useState(null);
    const [loading, setLoading] = useState(false);
    const [score_, setScore_] = useState(0);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        dispatch(getQuestions());
    }, []);

    useEffect(() => {
        if (questions) {
            setQuestion(questions[0]);
            setIndex(1);
        }
    }, [questions]);

    const check_answer = (user_answer) => {
        console.log(user_answer.toLowerCase() == question.correct_answer.toLowerCase());
        if (user_answer.toLowerCase() == question.correct_answer.toLowerCase()) {
            setScore_(val => ++val);
            dispatch(addAnswer({ question: question.question, correct_answer: question.correct_answer.toLowerCase(), user_success: true }));
        } else {
            dispatch(addAnswer({ question: question.question, correct_answer: question.correct_answer.toLowerCase(), user_success: false }));
        }
    };

    const nextQuestion = (evt) => {

        setLoading(true);
        let q_index = questions.findIndex(item => item == question);
        check_answer(evt.target.value);
        setChoice(evt.target.value);
        setTimeout(() => {
            setChoice(null);
            setQuestion(questions[++q_index]);
            setIndex(x => ++x);
            setLoading(false);

            if (index == 10) {
                dispatch(addScore(score_));
                history.push('/result');
            }
        }, 500);

    };
    return (
        <Card style={{ textAlign: 'center', paddingTop: '20px' }}>
            <Card.Title>
                {question?.category}
            </Card.Title>
            <Card.Body>
                <div style={{ border: '3px solid red', width: '60vw', height: '50vh', margin: '0 auto' }}>
                    {loading ? <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}><Spinner animation="border" /></div> : <h3>{question?.question}</h3>}
                </div>
                <div key={`true`} className="mt-3">
                    <Form.Check inline
                        name="group1"
                        type={'radio'}
                        id={`true`}
                        label={`True`}
                        onClick={nextQuestion}
                        value={'true'}
                        checked={choice == 'true'}
                        disabled={loading}
                    />

                    <Form.Check inline
                        name="group1"
                        type={'radio'}
                        id={`false`}
                        label={`False`}
                        onClick={nextQuestion}
                        value={'false'}
                        checked={choice == 'false'}
                        disabled={loading}
                    />
                </div>
            </Card.Body>

        </Card>
    );
};

export default QuizPage;
