// import { application } from 'express';
// import photos from '../mocks/photos';
// import topics from '../mocks/topics';
import { useState } from 'react';
import { useReducer } from 'react';
import { useEffect } from 'react';



const initialState = {
  favorite: [],
  modal: false,
  photos: [],
  topics: []
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

//Reducer with Switch statements
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload
      };
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

function useApplicationData2(props) {
console.log(props)
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    //Error right here
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => {console.log(data) ; dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data })});
  }, []);

  const stateObject = {
    ...state,
    dispatch
  };
  console.log("-----------------STATE OBJECT HERE------------------------", stateObject)
  return stateObject;
}

export default useApplicationData2;