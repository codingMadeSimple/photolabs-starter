import React, { useCallback, useState } from 'react';
import { ACTIONS } from 'hooks/useApplicationData2';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  // console.log(props,"-------------------BUTTON------------------")
  // console.log(data);
  // const [fill, setFill] = useState("#EEEEEE");
  // const [favorite, setFavorite] = props.state;
  // const data = props.data;
  // const toggleFavorite = () => {
  //   let isFaved=false;
  //   for(let i = 0; i < favorite.length; i++){
  //     if(favorite[i].id === data.id){
  //       isFaved=true
  //     }
  //   }

  //   setFill(fill === "#EEEEEE" ? "#C80000" : "#EEEEEE");
  //   //If the id value is found in the array then the next time it is clicked it will filter out that value. Else it will add it to the array.
  //   setFavorite(isFaved ? favorite.filter(word=>word.id !== data.id) : [...favorite, data] 
  //   );
  // };

//On line 32 onClick needs the ternary operator to choose
//if favorite.includes(payload:props.id) then (use.slice to remove the already favorited item) else add payload:props.id to favorites

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <div onClick={()=>{props.reducer.dispatch({type:ACTIONS.FAV_PHOTO_ADDED, payload:props.id})}}><FavIcon />
        </div>
      </div>
     </div>
  );
}//taken out of third div onClick={toggleFavorite} fill={fill} data={props.data}

//onClick={props.reducer.dispatch({type:ACTIONS.FAV_PHOTO_ADDEDP, payload:props.data.id}})

export default PhotoFavButton;