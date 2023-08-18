import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
// import PhotoDetailsModal from "routes/PhotoDetailsModal";


const PhotoList = (props) => {
  // console.log(props, "THIS IS PROPS AT THE PHOTO LIST------------------")
  if (props.photoData) {
    return (
      <ul className="photo-list">
        {props.photoData.map(photoData => 
        {
          // console.log("each photo", photoData)
          return (
          <PhotoListItem key={photoData.id} data={photoData} reducer={props.reducer} id = {photoData.id}/>
        )}
        )}
      </ul>
    );  
  };

  // if(props.photoArray){
  //   return(
  //   <ul className="photo-list">
  //   {props.photoArray.map(photoData => (
  //     <PhotoListItem key={photoData.id} data={photoData} reducer={props.reducer} id = {photoData.id}/>
  //   ))}
  // </ul>
  // )}
};

export default PhotoList;
