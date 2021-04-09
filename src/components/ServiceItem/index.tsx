import styles from './service.module.scss';

interface ServiceItemProps {
  imgSrc: string;
  title: string;
  description: string;
  position?: 'right' | 'left';
}

export const ServiceItem: React.FC<ServiceItemProps> = ({
  imgSrc,
  title,
  description,
  position = 'left',
}) => {
  return (
    <>
      <div className={styles.container}>
        {position === 'left' && <img src={imgSrc} alt={title} />}

        <section>
          <h3>{title}</h3>
          <p>{description}</p>
        </section>

        {position === 'right' && <img src={imgSrc} alt={title} />}
      </div>
    </>
  );
};
