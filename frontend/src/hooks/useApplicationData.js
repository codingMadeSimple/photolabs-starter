/*
Our useApplicationData Hook will return an object with four keys representing the following items:

The state object will contain the entire state of the application.
The updateToFavPhotoIds action can be used to set the favourite photos.
The setPhotoSelected action can be used when the user selects a photo.
The onClosePhotoDetailsModal action can be used to close the modal.
*/ 

import React from 'react';
import TopicListItem from './components/TopicListItem';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import TopNavigationBar from './components/TopNavigationBar';
import photos from './mocks/photos';
import topics from './mocks/topics';
import { useState } from 'react';
import { useReducer } from 'react';



export default function Application(props) {
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  return (
  {state, updateToFavPhotoIds, setPhotoSelected, onClosePhotoDetailsModal}
  );
}
const photoData = photos;
const topicData = topics;
const [favorite, setFavorite] = useState([]);
const [model, setModel] = useState(false);


/* insert app levels actions below */
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

console.log("ACTIONS", ACTIONS)
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      console.log(ACTIONS.FAV_PHOTO_ADDED)
    { /* insert all relevant actions as case statements*/ }  
    }
    // default:
    //   throw new Error(
    //     `Tried to reduce with unsupported action type: ${action.type}`
    //   );
  }



//Still need to do the following,
//**************************move the logic used to manage the state from the components/Application.js into it.