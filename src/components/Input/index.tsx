import { InputHTMLAttributes } from 'react';
import styles from './input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  name: string;
  inputType?: 'textarea' | 'input';
  Icon?: React.ElementType;
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  name,
  type,
  inputType = 'input',
  Icon,
  ...rest
}) => {
  return (
    <>
      <label className={styles.container} htmlFor={name}>
        {Icon && <Icon size={20} />}

        {inputType === 'input' ? (
          <input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            {...rest}
          />
        ) : (
          <textarea rows={6} id={name} name={name} placeholder={placeholder} />
        )}
      </label>
    </>
  );
};
