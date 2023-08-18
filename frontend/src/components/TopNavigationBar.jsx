import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  let isFavPhotoExist
  // console.log("NAVBAR", props.state)

  
  //props.state is an array with a length of two. The first index is an array of all favorited objects. The second index should be a setSomething function.
  
//Use the first index of props.index[0] to get the array of favorited photos/data
  // props.state[0].length>0 ? isFavPhotoExist=true : isFavPhotoExist=false
    

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar">
      {/* <TopicList topicData={props.topicData}/> */}
      {/* <FavBadge isFavPhotoExist={isFavPhotoExist}/> */}
      </div>
    </div>
  )
}

export default TopNavigation;