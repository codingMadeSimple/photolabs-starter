import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';


const PhotoDetailsModal = (props) => {
  // console.log("Props-----------------", props.data.similar_photos)
  const photoArray = [];
  for (const object in props.data.similar_photos) {
    photoArray.push(props.data.similar_photos[object]);
  }


  console.log("---------------------PHOTO ARRAY", photoArray);
  const test = () => {
    // return (<>
    //   <img className="photo-details-modal__images" src={photoArray[0].urls.regular} />
    //   <img className="photo-details-modal__images" src={photoArray[1].urls.regular} />
    //   <img className="photo-details-modal__images" src={photoArray[2].urls.regular} />
    //   <img className="photo-details-modal__images" src={photoArray[3].urls.regular} />
    //   </>
    // );
  };

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <img className="photo-details-modal__image" src={props.data.urls.full} />
        <header className="photo-details-modal__header">Similar Photos</header>
        <PhotoList photoArray={photoArray} state={props.state}/>
        
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
