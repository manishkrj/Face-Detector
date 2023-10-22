import React from 'react';
import FaceRecognition from './FaceRecognition';

const FaceBoxes = ({ imageUrl, box }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
        {
            box.map(
                (e)=>{
                    return (
                        <FaceRecognition box={e}/>
                    )
                }
            )
        }
      </div>
    </div>
  );
}

export default FaceBoxes;