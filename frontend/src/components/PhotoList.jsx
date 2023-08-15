import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import PhotoDetailsModal from "routes/PhotoDetailsModal";


const PhotoList = (props) => {
  // console.log("props.photoData-----------------------", props);
  console.log("props.photoData-------------------", props.photoData)
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
    // {console.log(props)}
    return(
    <ul className="photo-list">
    {props.photoArray.map(element => (
      
      <PhotoListItem key={element.id} data={element} state={props.state} />
    ))}
  </ul>
  )}
};

export default PhotoList;
