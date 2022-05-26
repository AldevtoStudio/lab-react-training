const Greetings = (props) => {
  const { lang, children } = props;

  const greetings = (_lang) => {
    switch (_lang) {
      case 'de':
        return 'Hallo';
      case 'es':
        return 'Hola';
      case 'fr':
        return 'Bonjour';
      case 'en':
        return 'Hello';
      default:
        return 'Hello';
    }
  };

  return (
    <div className='Greetings box'>
      {greetings(lang)} {children}
    </div>
  );
};

export default Greetings;
