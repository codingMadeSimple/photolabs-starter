import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  let isFavPhotoExist

  
  
  //set to two because the state starts with two elements
  props.state[0].length>0 ? isFavPhotoExist=true : isFavPhotoExist=false
    

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topicData={props.topicData}/>
      <FavBadge isFavPhotoExist={isFavPhotoExist}/>
    </div>
  )
}

export default TopNavigation;