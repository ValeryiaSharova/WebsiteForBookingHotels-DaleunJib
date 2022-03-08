/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import questionService from '../services/question.service';

const questionsSlice = createSlice({
  name: 'questions',
  initialState: {
    entities: null,
    isLoading: true,
    error: null,
  },
  reducers: {
    questionsRequested: state => {
      state.isLoading = true;
    },
    questionsReceived: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    questionsRequestFailer: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { actions, reducer: questionsReducer } = questionsSlice;
const { questionsReceived, questionsRequestFailer, questionsRequested } = actions;

export const loadQuestions = () => async dispatch => {
  dispatch(questionsRequested());
  try {
    const { content } = await questionService.get();
    dispatch(questionsReceived(content));
  } catch (error) {
    dispatch(questionsRequestFailer());
  }
};

export const getQuestions = () => state => state.questions.entities;
export const getQuestionsLoadingStatus = () => state => state.questions.isLoading;
export const getQuestionsError = () => state => state.questions.error;

export default questionsReducer;
