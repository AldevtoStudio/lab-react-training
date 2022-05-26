const Random = (props) => {
  const { min, max } = props;

  const randomNumber = (_min, _max) => {
    return Math.floor(Math.random() * (_max - _min + 1) + _min);
  };

  return (
    <div className='Random box'>
      Random value between {min} and {max} {'=>'} {randomNumber(min, max)}
    </div>
  );
};

export default Random;
