import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {
console.log(isFavPhotoExist,"Fav photo exists")
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist} fill="#EEEEEE"/>
    </div>
  ) 
};

export default FavBadge;