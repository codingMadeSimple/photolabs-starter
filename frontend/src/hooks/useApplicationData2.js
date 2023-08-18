// import { application } from 'express';
// import photos from '../mocks/photos';
// import topics from '../mocks/topics';
import { useState } from 'react';
import { useReducer } from 'react';
import { useEffect } from 'react';



const initialState = {
  favorite: [],
  modal: null,
  photos: [],
  topics: []
};

/* insert app levels actions below */
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  SET_MODAL_TRUE: 'SET_MODAL_TRUE',
  SET_MODAL_FALSE: 'SET_MODAL_FALSE'
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
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        select: true
      };
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favorite: [...state.favorite, action.payload]
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favorite: state.favorite.filter(id => id !== action.payload.id)
      };
    case ACTIONS.SET_MODAL_TRUE:
      return {
        ...state,
        modal: action.payload
      };
    case ACTIONS.SET_MODAL_FALSE:
      return {
        ...state,
        modal: null
      };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

function useApplicationData2(props) {
  // console.log(props)
  const [state, dispatch] = useReducer(reducer, initialState);

  // const [state, setState] = useState(initialState) 

  useEffect(() => {
    //Error right here
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => { dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }); });
  }, []);

  const stateObject = {
    ...state,
    dispatch
  };
  // console.log("-----------------STATE OBJECT HERE------------------------", stateObject)
  return stateObject;
}

export default useApplicationData2;