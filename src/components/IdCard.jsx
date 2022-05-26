const IdCard = (props) => {
  const { picture, firstName, lastName, gender, height, birth } = props;

  return (
    <div className='IdCard box'>
      <div>
        <img src={picture} alt='Profile Img' />
      </div>
      <div>
        <b>First Name </b> {firstName} <br />
        <b>Last Name </b> {lastName} <br />
        <b>Gender:</b> {gender} <br />
        <b>Height:</b> {height / 100}m <br />
        <b>Birth:</b> {birth.toDateString()} <br />
      </div>
    </div>
  );
};

export default IdCard;
