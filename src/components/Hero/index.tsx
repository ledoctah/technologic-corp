import { Button } from '../Button';
import styles from './hero.module.scss';

export function Hero(): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.image} />
        <div className={styles.content}>
          <h1>Soluções inteligentes de TI</h1>
          <p>Techno Logic, o melhor amigo para o seu negócio.</p>
          <Button text="Quero saber mais" type="button" />
        </div>
      </div>
    </>
  );
}
