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
import { useEffect } from 'react';
import useApplicationData2 from './hooks/useApplicationData2'


//STILL NEED TO IMPLEMENT THIS
//Move the logic used to manage the state from the components/Application.js into it.

const App = (props) => {
  const photoData = photos;
  const topicData = topics;
  const test = useApplicationData2()
  console.log("This is application data -----------------------", test)
  const [favorite, setFavorite] = useState([]);
  const [model, setModel] = useState(false);
  return (
    <div className="App">
      <TopNavigationBar topicData={topicData} state={[favorite, setFavorite]} />
      <PhotoList photoData={photoData} state={[favorite, setFavorite]} model={[model, setModel]} />
    </div>
  );
};




// const photos = new Array(3)

// {photos.map((photoData, index) => (
//   <PhotoListItem key={index} listItemData={photoData} />
// ))}

export default App;
