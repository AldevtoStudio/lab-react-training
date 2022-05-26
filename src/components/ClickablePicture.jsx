import { useState } from 'react';

const ClickablePicture = (props) => {
  const { img, imgClicked } = props;

  const [clicked, setClicked] = useState(false);

  const handleClick = () => setClicked(!clicked);

  const imgSource = (clicked && imgClicked) || img;

  return (
    <div className='ClickablePicture'>
      <img src={imgSource} alt='Clickable Img' onClick={handleClick} />
    </div>
  );
};

export default ClickablePicture;
