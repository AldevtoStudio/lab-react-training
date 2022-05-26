const BoxColor = (props) => {
  const { r, g, b } = props;

  const IsBright = r + g + b < (255 * 3) / 2;

  const componentToHex = (c) => {
    var hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  const rgbToHex = (_r, _g, _b) => {
    return '#' + componentToHex(_r) + componentToHex(_g) + componentToHex(_b);
  };

  return (
    <div
      className='BoxColor box'
      style={{
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        color: `${IsBright ? 'white' : 'black'}`
      }}
    >
      rgb({r}, {g}, {b}) <br />
      {rgbToHex(r, g, b)}
    </div>
  );
};

export default BoxColor;
