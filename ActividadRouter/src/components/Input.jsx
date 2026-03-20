import '../App.css';

const Input = ({ valor, onChange }) => {
  return (
    <input
    className='campo'
      type="text"
      value={valor}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;