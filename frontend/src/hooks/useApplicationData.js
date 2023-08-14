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
import { useReducer } from 'react';
import { useEffect } from 'react';
import axios from 'axios'

const initialState = {
  photoData: [],
  topicData: []
};

export default function Application(props) {
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
  } = axios.get();

  <button onClick></button>

  const getApiData = () => {
    axios.get('http://localhost:8001/api/photos')
    .then(res => {
      console.log(res.data.content)
      getApiData(res.data.content)
    }).catch(err => {
      console.log(err)
    })
  }
  return (
    { state, updateToFavPhotoIds, setPhotoSelected, onClosePhotoDetailsModal }
  );
}

const [model, setModel] = useState(false);
const [favorite, dispatch] = useReducer(reducer, []);

/* insert app levels actions below */
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
};

// console.log("ACTIONS", ACTIONS)
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };

    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
      };

  }

  // default:
  //   throw new Error(
  //     `Tried to reduce with unsupported action type: ${action.type}`
  //   );
}



//Still need to do the following,
//**************************move the logic used to manage the state from the components/Application.js into it.