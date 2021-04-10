import Spinner from 'react-spinners/ClipLoader';

import styles from './button.module.scss';

interface ButtonProps {
  text: string;
  isAnchor?: boolean;
  href?: string;
  type?: 'button' | 'submit';
  isLoading?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  isAnchor = false,
  href = '',
  type = 'button',
  isLoading = false,
  onClick,
}) => {
  if (isAnchor) {
    return (
      <>
        <a className={styles.button} href={href}>
          {text}
        </a>
      </>
    );
  }

  return (
    <>
      <button
        className={styles.button}
        type={type === 'button' ? 'button' : 'submit'}
        disabled={isLoading}
        onClick={onClick}
      >
        {isLoading ? <Spinner color="#FFF" size={14} /> : <>{text}</>}
      </button>
    </>
  );
};
