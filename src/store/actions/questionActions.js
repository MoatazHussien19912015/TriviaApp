import * as actions from '../types/questionTypes';
import axios from 'axios';
import { url } from '../../config';





export const getQuestions = () => (dispatch, getState) => {
    dispatch({ type: actions.GET_QUESTIONS_REQUEST });
    // checking if the questions existed in the localstorage
    if (localStorage.getItem('questions')) {
        dispatch({ type: actions.GET_QUESTIONS_SUCCESS, payload: JSON.parse(localStorage.getItem('questions')) });
        console.log('heeeey');
    }
    else {
        axios.get(`${url}?amount=10&difficulty=hard&type=boolean`).
            then(result => {
                // removing hmtl unicoded characters
                let questions = result.data.results.map(question => {
                    const encodedResults = question.question;
                    const textarea = document.createElement('textarea');
                    textarea.innerHTML = encodedResults;
                    return Object.assign({}, { ...question }, { question: textarea.value });
                });
                localStorage.setItem('questions', JSON.stringify(questions));
                dispatch({ type: actions.GET_QUESTIONS_SUCCESS, payload: questions });
            })
            .catch(err => { console.log(err); dispatch({ type: actions.GET_QUESTIONS_FAIL, payload: err.response.data }) });
    }
};


export const addAnswer = (answer) => (dispatch, getState) => {
    dispatch({ type: actions.ADD_ANSWER_REQUEST });
    dispatch({ type: actions.ADD_ANSWER_SUCCESS, payload: answer });
};

export const addScore = (score) => (dispatch, getState) => {
    dispatch({ type: actions.ADD_SCORE_REQUEST });
    dispatch({ type: actions.ADD_SCORE_SUCCESS, payload: score });
};

export const init = () => (dispatch, getState) => {
    dispatch({ type: actions.INIT_REQUEST });
    localStorage.removeItem('questions');
    dispatch({ type: actions.INIT_SUCCESS });
};

