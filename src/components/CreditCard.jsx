import visaLogo from './../assets/images/visa.png';
import masterCardLogo from './../assets/images/master-card.svg';

const CreditCard = (props) => {
  const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;

  let month = ('0' + expirationMonth).slice(-2);
  let year = expirationYear.toString().slice(2);
  let typeSource = type === 'Visa' ? visaLogo : masterCardLogo;

  return (
    <div className='CreditCard' style={{ backgroundColor: bgColor, color: color }}>
      <div className='type'>
        <img src={typeSource} alt={type} />
      </div>
      <div className='number'>•••• •••• •••• {number.slice(12)}</div>
      <div>
        Expires {month}/{year}
        <span className='bank'>{bank}</span>
      </div>
      <div>{owner}</div>
    </div>
  );
};

export default CreditCard;
