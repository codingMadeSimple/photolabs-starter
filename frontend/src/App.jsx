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



// Note: Rendering a single component to build components in isolation

//THIS IS THE MAIN APP
// const App = () => {

//   return (
//     <div className="App">
//       <PhotoList/>
//       <TopicList/>
//     </div>
//   );
// };



const App = (props) => {
  const photoData = photos;
  const topicData = topics;
  const [favorite, setFavorite] = useState([]);
  const [model, setModel] = useState(false);

  return (
    <div className="App">
      <TopNavigationBar topicData={topicData} state={[favorite, setFavorite]} />
      <PhotoList photoData={photoData} state={[favorite, setFavorite]} model={[model, setModel]} />
    </div>
  );
};


// const photos = new Array(3).fill(sampleDataForPhotoListItem);

// const createPhotoContainer = function(sampleDataForPhotoListItem){ 
//   const photos = [];
//   //Loops through 3 photos
//   for(let i = 0; i < 3; i ++){
//     photos.push(<PhotoListItem listItemData={sampleDataForPhotoListItem}/>)
//   }
//   return photos
// }

// const photos = new Array(3)

// {photos.map((photoData, index) => (
//   <PhotoListItem key={index} listItemData={photoData} />
// ))}

export default App;
