import React from "react";
import { useState } from 'react';
import "../styles/PhotoListItem.scss";
import "components/PhotoFavButton";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import { ACTIONS } from "../hooks/useApplicationData2";


const PhotoListItem = (props) => {
  console.log("photo-list-item-----------------", props)
  // console.log(props.data,"--------------------props.data------------photolistitem")
// console.log(ACTIONS)
  // const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    props.reducer.dispatch({type: ACTIONS.SET_MODAL_TRUE, payload:props.id})
    // setModalOpen(true);
  };

  const closeModal = () => {
    props.reducer.dispatch({type: ACTIONS.SET_MODAL_FALSE})
    // setModalOpen(false);
  };

  return (
    <div className="photo-list__item">
      <PhotoFavButton reducer={props.reducer} id={props.id}/>
      <div onClick={openModal} className="photo-profile">
        <img className="photo-list__image" src={props.data.urls.regular} />
      </div>
      {(props.reducer.modal===props.id) && (
        <PhotoDetailsModal data={props.data} closeModal={closeModal} reducer={props.reducer}/>
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
