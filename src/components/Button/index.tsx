import styles from './button.module.scss';

interface ButtonProps {
  text: string;
  isAnchor?: boolean;
  href?: string;
  type?: 'button' | 'submit';
}

export const Button: React.FC<ButtonProps> = ({
  text,
  isAnchor = false,
  href = '',
  type = 'button',
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
      >
        {text}
      </button>
    </>
  );
};
