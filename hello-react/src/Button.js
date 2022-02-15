import React from 'react';

const Btn = ({onClick}) => {
  console.log('btn');
  return <button onClick={onClick}>증가</button>
};

export default React.memo(Btn);