import React from 'react';
import coronaImage from '../../images/titleimage.png';
import './TitleImage.css'
// import styles from  './TitleImage.module.css';

function TitleImage() {
  
  return (
    <div className="imageContainer">
      <img className="image" src={coronaImage} alt="COVID-19" />
    </div>
  );
}

export default TitleImage;
