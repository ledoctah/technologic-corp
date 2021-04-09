import styles from './founder.module.scss';

interface FounderProps {
  imgSrc: string;
  name: string;
}

export const Founder: React.FC<FounderProps> = ({ imgSrc, name }) => {
  return (
    <>
      <div className={styles.container}>
        <img src={imgSrc} alt={name} />
        <p>{name}</p>
      </div>
    </>
  );
};
