import { useCallback } from 'react';
import { useReducer } from 'react';

const INITIAL_FORM = {
  text: '',
  rating: 5,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'setText':
      return {
        ...state,
        text: payload,
      };
    case 'setRating':
      return {
        ...state,
        rating: payload,
      };
    case 'setMadRating':
      return {
        ...state,
        text: 'э, поставь повыше!',
        rating: +payload + 2,
      };
    case 'setMadRatingToo':
      return {
        ...INITIAL_FORM,
        text: 'сказано же...',
        rating: +payload + 1,
      };
    default:
      return {
        ...state,
      };
  }
};

export const useReviewForm = (initialState = INITIAL_FORM) => {
  const [form, dispatch] = useReducer(reducer, initialState);

  const setRating = useCallback((evt) => {
    return +evt.target.value === 1
      ? dispatch({ type: 'setMadRating', payload: evt.target.value })
      : +evt.target.value === 2
      ? dispatch({ type: 'setMadRatingToo', payload: evt.target.value })
      : dispatch({ type: 'setRating', payload: evt.target.value });
  }, []);

  const setText = useCallback((evt) => {
    dispatch({ type: 'setText', payload: evt.target.value });
  }, []);

  return { form, setRating, setText };
};
