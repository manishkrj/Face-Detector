import React from 'react';

const Rank = ({ name, entries }) => {
  if(name){
  return (
    <div>
      <div className='white f3'>
        {`${name}, Wow! entry count is...`}
      </div>
      <div className='white f1'>
        {entries}
      </div>
    </div>
  );}
  else
  {
    return (
    <div>
      <div className='white f3'>
        {`Signed in as guest`}
      </div>
    </div>
    )
  }
}

export default Rank;