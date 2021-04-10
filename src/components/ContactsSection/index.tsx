import { useState, FormEvent } from 'react';
import * as yup from 'yup';
import { FiType, FiMail, FiVoicemail } from 'react-icons/fi';
import { toast } from 'react-toastify';

import axios from '../../pages/api/axios';

import { Button } from '../Button';
import { Input } from '../Input';
import { SocialSection } from '../SocialSection';

import styles from './contacts.module.scss';

export const ContactsSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [isSubmiting, setIsSubmiting] = useState(false);

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    setIsSubmiting(true);

    event.preventDefault();

    try {
      const schema = yup.object().shape({
        name: yup.string().required('O campo nome é obrigatório'),
        email: yup
          .string()
          .required('O campo e-mail é obrigatório.')
          .email('O campo email informado é inválido.'),
        subject: yup.string().required('O campo assunto é obrigatório.'),
        message: yup.string().required('O campo mensagem é obrigatório.'),
      });

      const data = {
        name,
        email,
        subject,
        message,
      };

      await schema.validate(data, {
        abortEarly: false,
      });

      await axios.post('/api/contact', {
        ...data,
      });

      toast.success('O e-mail foi enviado. Em breve entraremos em contato.');

      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (e) {
      if (e instanceof yup.ValidationError) {
        toast.error(e.errors[0]);
      } else {
        toast.error('Ocorreu um erro. Por favor, tente novamente.');
      }
    }

    setIsSubmiting(false);
  };

  return (
    <>
      <div className={styles.container} id="contact">
        <div className={styles.content}>
          <h2>Contato</h2>
          <p>Entre em contato conosco através das nossas redes sociais:</p>

          <SocialSection />

          <p>Ou preencha esse formulário que entraremos em contato com você:</p>

          <form onSubmit={handleSubmit}>
            <Input
              Icon={FiType}
              type="text"
              name="name"
              placeholder="Seu nome"
              state={name}
              setState={setName}
            />

            <Input
              Icon={FiMail}
              type="email"
              name="email"
              placeholder="Seu email"
              state={email}
              setState={setEmail}
            />

            <Input
              Icon={FiVoicemail}
              type="text"
              name="subject"
              placeholder="Assunto"
              state={subject}
              setState={setSubject}
            />

            <Input
              name="message"
              inputType="textarea"
              placeholder="Sua mensagem"
              state={message}
              setState={setMessage}
            />

            <Button type="submit" text="Enviar" isLoading={isSubmiting} />
          </form>
        </div>
      </div>
    </>
  );
};
