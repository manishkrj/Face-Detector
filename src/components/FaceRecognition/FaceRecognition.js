import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({box}) => {
  return (
        <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
  );
}

export default FaceRecognition;