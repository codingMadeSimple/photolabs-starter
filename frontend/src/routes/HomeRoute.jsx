import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from './components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import { useState } from 'react';


const HomeRoute = (props) => {
  
  return (
    <div className="home-route">
      <TopNavigationBar/>
      <PhotoList />
    </div>
  );
};

export default HomeRoute;


// const [favorite, setFavorite]= useState("off");
// const dark = (light==='off') ? 'dark' : '';
// const switchLight = () => setLight(light==="on" ? "off" : "on")