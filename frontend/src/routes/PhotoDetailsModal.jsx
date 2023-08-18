import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import { useState } from 'react';
import FavBadge from 'components/FavBadge';
import FavIcon from 'components/FavIcon';

const PhotoDetailsModal = (props) => {
  // console.log("Props-----------------", props)

  // const [modal, setModal] = useState(false);

  const photoArray = [];
  for (const object in props.data.similar_photos) {
    photoArray.push(props.data.similar_photos[object]);
  }


  // console.log("---------------------IS modal FUNCTION HERE", props.closeModal);
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
      <button onClick={props.closeModal} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol"/>
      </button>
      <div className="photo-details-modal__images">
        <div>
          <FavBadge/>
        <img className="photo-details-modal__image" src={props.data.urls.full} />
        
        </div>
        <header className="photo-details-modal__header">Similar Photos</header>
        {/* This photo array beneath comes from teh  */}
        <PhotoList photoArray={photoArray} reducer={props.reducer}/>

      </div>
    </div>
  );
};

export default PhotoDetailsModal;
