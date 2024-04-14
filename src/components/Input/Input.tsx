type InputProps = React.ComponentProps<'input'> & {
  label: string;
  id: string;
  placeholder: string;
  setValue: (value: string) => void;
};

export const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '.875rem',
  borderRadius: '.5rem',
  fontSize: '.875rem',
  fontWeight: '400',
  letterSpacing: '.15px',
  display: 'block',
  border: '1px solid #909090',
  background: '#fff',
  transition: '.3s',
  outline: 'none',
  marginBottom: '10px',
  fontFamily: 'Poppins, sans-serif',
};

const Input = ({ label, id, setValue, placeholder, ...props }: InputProps) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        style={inputStyle}
        type="text"
        name={id}
        id={id}
        placeholder={placeholder}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </div>
  );
};

export default Input;
