// import { application } from 'express';
import photos from '../mocks/photos';
import topics from '../mocks/topics';
import { useState } from 'react';
import { useReducer } from 'react';

export default function useApplicationData2(props) {
  const initialState = {
    photoData: photos,
    topicData: topics,
    favorite: [],
    model: false
  };

  /* insert app levels actions below */
  const ACTIONS = {
    FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
    FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
    SET_PHOTO_DATA: 'SET_PHOTO_DATA',
    SET_TOPIC_DATA: 'SET_TOPIC_DATA',
    SELECT_PHOTO: 'SELECT_PHOTO',
    DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
  };

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.FAV_PHOTO_ADDED:
        return {
          ...state,
          favorite: [...state.favorite, action.payload.id]
        };
      case ACTIONS.FAV_PHOTO_REMOVED:
        return {
          ...state,
          favorite: state.favorite.filter(id => id !== action.payload.id)
        };
        { /* insert all relevant actions as case statements*/ }
      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  const stateObject = {
    ...state,
    dispatch
  };

  // Example actions for photolabs * dispatch({ type: 'FAV_PHOTO_ADDED', payload: { id }}); * dispatch({ type: 'FAV_PHOTO_REMOVED', payload: { id }});

  return stateObject;
}

