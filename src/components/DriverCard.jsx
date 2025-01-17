import Rating from './Rating';

const DriverCard = (props) => {
  const { name, rating, img, car } = props;

  return (
    <div className='DriverCard'>
      <img src={img} alt={name} />
      <div>
        <h2>{name}</h2>
        <Rating>{rating}</Rating>
        <div>
          {car.model} - {car.licensePlate}
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
