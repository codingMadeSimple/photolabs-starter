import React, { useCallback, useState } from 'react';
import { ACTIONS } from 'hooks/useApplicationData2';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import FavBadge from './FavBadge';
function PhotoFavButton(props) {

console.log(props,"This is the state prop")
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <div onClick={()=>{props.reducer.dispatch({type:ACTIONS.FAV_PHOTO_ADDED, payload:props.id})}}>
          <FavBadge />
        </div>
      </div>
     </div>
  );
}//taken out of third div onClick={toggleFavorite} fill={fill} data={props.data}

//onClick={props.reducer.dispatch({type:ACTIONS.FAV_PHOTO_ADDEDP, payload:props.data.id}})

export default PhotoFavButton;