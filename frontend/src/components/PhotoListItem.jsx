import React from "react";
import { useState } from 'react';
import "../styles/PhotoListItem.scss";
import "components/PhotoFavButton"
import PhotoFavButton from "components/PhotoFavButton";
import PhotoDetailsModal from "routes/PhotoDetailsModal";


const PhotoListItem = (props) => {
// console.log(props)
const [modal, setModal]=useState(false)
  
  const toggleModel=function() {
    console.log("Model has been toggled")
    setModal(!modal)
  }


  return (
    <div className="photo-list__item" >
      <PhotoFavButton data={props.data} state={props.state}/>
      <div onClick={toggleModel}>
        {modal && <PhotoDetailsModal />}
      <img className="photo-list__image" src={props.data.urls.full} />
      </div>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.data.user.profile} />
        <div className="photo-list__user-info">
          {props.data.user.username}
          <div className="photo-list__user-location"> {`${props.data.location.city}, ${props.data.location.country}`} </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
