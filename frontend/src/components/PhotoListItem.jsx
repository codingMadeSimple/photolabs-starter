import React from "react";
import { useState } from 'react';
import "../styles/PhotoListItem.scss";
import "components/PhotoFavButton";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoDetailsModal from "routes/PhotoDetailsModal";


const PhotoListItem = (props) => {
  console.log("photo-list-item-----------------", props)

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="photo-list__item">
      <PhotoFavButton data={props.data} state={props.state} />
      <div onClick={openModal} className="photo-profile">
        <img className="photo-list__image" src={props.data.urls.regular} />
      </div>
      {modalOpen && (
        <PhotoDetailsModal data={props.data} state={props.state} closeModal={closeModal} />
      )}
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
