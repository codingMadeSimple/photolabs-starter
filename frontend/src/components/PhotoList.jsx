import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
// import PhotoDetailsModal from "routes/PhotoDetailsModal";


const PhotoList = (props) => {
  if (props.photoData) {
    return (
      <ul className="photo-list">
        {props.photoData.map(photoData => (
          <PhotoListItem key={photoData.id} data={photoData} state={props.state} />
        ))}
      </ul>
    );  
  };
  if(props.photoArray){
    return(
    <ul className="photo-list">
    {props.photoArray.map(element => (
      <PhotoListItem key={element.id} data={element} state={props.state} />
    ))}
  </ul>
  )}
};

export default PhotoList;
