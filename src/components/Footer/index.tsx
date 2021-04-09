import styles from './footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h4>
            Techno Logic, o melhor amigo do seu negócio.{' '}
            <span role="img" aria-label="rocket emoji">
              🚀
            </span>
          </h4>

          <p>
            Av. Interlagos, 1329 - 4º - Chácara Flora, São Paulo - SP, 04661-100
          </p>

          <span>
            Esse website se trata de um trabalho acadêmico e todas as
            informações contidas nas páginas são totalmente fictícias.
          </span>
        </div>
      </div>
    </>
  );
};
