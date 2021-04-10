import Link from 'next/link';

import styles from './socialsection.module.scss';

export const SocialSection: React.FC = () => {
  return (
    <section className={styles.socialsection}>
      <Link href="https://instagram.com/technologic.ss.oficial" passHref>
        <a target="_blank">
          <img
            src="https://ledoctah-app-technology.s3.us-east-2.amazonaws.com/instagram.png"
            alt="Instagram"
          />
        </a>
      </Link>

      <Link
        href="https://wa.me/+5511981436494?text=Ol%C3%A1%21+Gostaria+de+saber+um+pouco+mais+dos+servi%C3%A7os+da+Techno+Logic%21"
        passHref
      >
        <a target="_blank">
          <img
            src="https://ledoctah-app-technology.s3.us-east-2.amazonaws.com/whatsapp.png"
            alt="WhatsApp"
          />
        </a>
      </Link>
    </section>
  );
};
