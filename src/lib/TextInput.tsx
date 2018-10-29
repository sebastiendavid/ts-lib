import * as React from 'react';
import './TextInput.css';

interface ITextInputPropTypes {
  type?: string;
  label?: string;
  value?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const TextInput = ({
  type = 'text',
  label,
  value,
  placeholder,
  onChange,
}: ITextInputPropTypes) => (
  <div className="simple-form-group">
    {label && <label className="simple-text-label">{label}</label>}
    <input
      type={type}
      className="simple-text-input"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

export default TextInput;
