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
import useApplicationData2 from './hooks/useApplicationData2';
import HomeRoute from 'routes/HomeRoute';


//STILL NEED TO IMPLEMENT THIS
//Move the logic used to manage the state from the components/Application.js into it.

// const App = (props) => {
//   //As stated in Create a Side Peak, I've moved the Modal logic to the top App file
//   const [modalOpen, setModalOpen] = useState(false);

//   const openModal = () => {
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   const photoData = photos;
//   const topicData = topics;
//   const test = useApplicationData2();
//   // console.log("This is application data -----------------------", test);
//   const [favorite, setFavorite] = useState([]);
//   const [modal, setmodal] = useState(false);
//   return (
//     <div className="App">
//       <TopNavigationBar topicData={topicData} state={[favorite, setFavorite]} />
//       <PhotoList photoData={photoData} state={[favorite, setFavorite]} modal={[modal, setmodal]} />
//     </div>
//   );
// };







const App = (props) => {



  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const test = useApplicationData2();
console.log("HERE IS THE DATA", test)
  return (
    <HomeRoute className="home-route" data={test}/>
  );
};


// const photos = new Array(3)

// {photos.map((photoData, index) => (
//   <PhotoListItem key={index} listItemData={photoData} />
// ))}

export default App;
// topicData={topicData} state={[favorite, setFavorite]}