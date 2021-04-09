import { FiType, FiMail, FiVoicemail } from 'react-icons/fi';
import { Button } from '../Button';

import { Input } from '../Input';
import styles from './contacts.module.scss';

export const ContactsSection: React.FC = () => {
  return (
    <>
      <div className={styles.container} id="contact">
        <div className={styles.content}>
          <h2>Contato</h2>
          <p>Entre em contato conosco através das nossas redes sociais:</p>
          <p>Ou preencha esse formulário que entraremos em contato com você:</p>

          <form>
            <Input
              Icon={FiType}
              type="text"
              name="name"
              placeholder="Seu nome"
            />

            <Input
              Icon={FiMail}
              type="email"
              name="email"
              placeholder="Seu email"
            />

            <Input
              Icon={FiVoicemail}
              type="text"
              name="subject"
              placeholder="Assunto"
            />

            <Input
              name="message"
              inputType="textarea"
              placeholder="Sua mensagem"
            />

            <Button text="Enviar" />
          </form>
        </div>
      </div>
    </>
  );
};
