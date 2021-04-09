import Link from 'next/link';

import styles from './header.module.scss';

export function Header(): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <img src="/assets/logo.svg" alt="Logo" />
          <nav>
            <Link href="#ourservices" passHref>
              <a>Nossos serviços</a>
            </Link>

            <Link href="#aboutus" passHref>
              <a>Sobre nós</a>
            </Link>

            <Link href="#contact" passHref>
              <a>Contato</a>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
