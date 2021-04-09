import styles from './header.module.scss';

export function Header(): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <img src="/assets/logo.svg" alt="Logo" />
          <nav>
            <a href="ourservices">Nossos serviços</a>
            <a href="aboutus">Sobre nós</a>
            <a href="contact">Contato</a>
          </nav>
        </div>
      </div>
    </>
  );
}
