import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from '../components/TopNavigationBar'
import PhotoList from 'components/PhotoList';
import { useState } from 'react';


const HomeRoute = (props) => {
  // console.log(props, "This is the props from HOME ROUTE------------------")
  // console.log(props.data.photoData,"THIS IS THE MAIN ROUTE DATA")
  return (
    <div className="home-route">
      <TopNavigationBar />
      <PhotoList photoData={props.data.photoData} reducer={props.data}/>
    </div>
  );
};

export default HomeRoute;


// const [favorite, setFavorite]= useState("off");
// const dark = (light==='off') ? 'dark' : '';
// const switchLight = () => setLight(light==="on" ? "off" : "on")

// const HomeRoute = (props) => {
  
//   const photoData = photos;
//   const topicData = topics;
//   const test = useApplicationData2()
//   console.log("This is application data -----------------------", test)
//   //Line 33 saves the favorited photos to the state which gets passed.
//   const [favorite, setFavorite] = useState([]);
//   const [modal, setmodal] = useState(false);

//   return (
//     <div className="home-route">
//       <TopNavigationBar topicData={topicData} state={[favorite, setFavorite]}/>
//       <PhotoList photoData={photoData} state={[favorite, setFavorite]} modal={[modal, setmodal]}/>
//       </div>
//   );
// };

// export default HomeRoute;