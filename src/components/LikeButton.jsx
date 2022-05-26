import { useState } from 'react';

const LikeButton = () => {
  const colorArr = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const [likeCount, increaseLikes] = useState(0);

  const handleClick = () => {
    increaseLikes(likeCount + 1);
  };

  const color = colorArr[likeCount % colorArr.length];

  return (
    <div className='LikeButton'>
      <button style={{ backgroundColor: color }} onClick={handleClick}>
        {likeCount} Like{likeCount !== 1 && 's'}
      </button>
    </div>
  );
};

export default LikeButton;
