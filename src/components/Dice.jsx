import { useState } from 'react';
import dice0 from './../assets/images/dice-empty.png';
import dice1 from './../assets/images/dice1.png';
import dice2 from './../assets/images/dice2.png';
import dice3 from './../assets/images/dice3.png';
import dice4 from './../assets/images/dice4.png';
import dice5 from './../assets/images/dice5.png';
import dice6 from './../assets/images/dice6.png';

const getRandom = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const Dice = () => {
  const diceValues = [dice1, dice2, dice3, dice4, dice5, dice6];

  let [result, setResult] = useState(getRandom());

  const handleClick = () => {
    if (result) {
      result = setResult(null);
      setTimeout(() => {
        setResult(getRandom());
      }, 1000);
    }
  };

  const imgSource = (result && diceValues[result]) || dice0;

  return (
    <div className='Dice'>
      <img src={imgSource} alt='Dice' onClick={handleClick} />
    </div>
  );
};

export default Dice;
