import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import PhotoDetailsModal from "routes/PhotoDetailsModal";


const PhotoList = (props) => {
  // console.log(props)
  return (
    <ul className="photo-list">
      {props.photoData.map(photoData => (
        <PhotoListItem onFavoriteChange={(favObj) => onFavoriteChange(favObj)} key={photoData.id} props={props} data={photoData} state={props.state} />
      ))}
    </ul>
  );
};

export default PhotoList;
