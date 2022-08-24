import * as actions from '../types/questionTypes';

function questionsReducer(state = {
    loading: false,
    questions: localStorage.getItem('questions') ? JSON.parse(localStorage.getItem('questions')) : [],
    answers: [],
    score: 0,
    error: null
}, action) {
    switch (action.type) {
        case actions.GET_QUESTIONS_REQUEST: return { ...state, loading: true };
        case actions.GET_QUESTIONS_SUCCESS: return {
            ...state, loading: false,
            questions: action.payload, error: null
        };
        case actions.GET_QUESTIONS_FAIL: return { ...state, loading: false, questions: [], error: action.payload };

        case actions.ADD_ANSWER_REQUEST: return { ...state, loading: true };
        case actions.ADD_ANSWER_SUCCESS: return {
            ...state, loading: false,
            answers: [...state.answers, action.payload]
        };

        case actions.ADD_SCORE_REQUEST: return { ...state, loading: true };
        case actions.ADD_SCORE_SUCCESS: return {
            ...state, loading: false,
            score: action.payload
        };

        case actions.INIT_REQUEST: return { ...state, loading: true };
        case actions.INIT_SUCCESS: return {
            ...state, loading: false,
            questions: [], answers: [], score: 0, error: null
        };


        default: return state;
    }
}

export default questionsReducer;