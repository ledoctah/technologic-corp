import { InputHTMLAttributes, useState } from 'react';
import styles from './input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  name: string;
  inputType?: 'textarea' | 'input';
  Icon?: React.ElementType;
  state?: string;
  setState?: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  name,
  type,
  inputType = 'input',
  Icon,
  state,
  setState,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  function handleChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void {
    setState(e.target.value);
  }

  const handleFocus = (focus: boolean): void => {
    setIsFocused(focus);
  };

  return (
    <>
      <label
        className={`${styles.container} ${isFocused && styles.focused}`}
        htmlFor={name}
      >
        {Icon && <Icon size={20} />}

        {inputType === 'input' ? (
          <input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={handleChange}
            value={state}
            onFocus={() => handleFocus(true)}
            onBlur={() => handleFocus(false)}
            {...rest}
          />
        ) : (
          <textarea
            rows={6}
            id={name}
            name={name}
            placeholder={placeholder}
            onChange={handleChange}
            value={state}
            onFocus={() => handleFocus(true)}
            onBlur={() => handleFocus(false)}
          />
        )}
      </label>
    </>
  );
};
