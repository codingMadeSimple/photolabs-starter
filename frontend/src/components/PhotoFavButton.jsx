import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  // console.log(props);
  const [fill, setFill] = useState("#EEEEEE");
  const [favorite, setFavorite] = props.state;
  const data = props.data;
  const toggleFavorite = () => {
    let isFaved=false;
    for(let i = 0; i < favorite.length; i++){
      if(favorite[i].id === data.id){
        isFaved=true
      }
    }

    setFill(fill === "#EEEEEE" ? "#C80000" : "#EEEEEE");
    //If the id value is found in the array then the next time it is clicked it will filter out that value. Else it will add it to the array.
    setFavorite(isFaved ? favorite.filter(word=>word.id !== data.id) : [...favorite, data] 
    );
  };
  
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <div onClick={toggleFavorite} ><FavIcon data={props.data} fill={fill} />
        </div>
      </div>
     </div>
  );
}

export default PhotoFavButton;