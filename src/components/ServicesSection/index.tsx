import { ServiceItem } from '../ServiceItem';

import styles from './services.module.scss';

interface Service {
  title: string;
  description: string;
  imgSrc: string;
  position: 'left' | 'right';
}

const services: Service[] = [
  {
    title: 'Desenvolvimento de websites',
    description: `Trabalhamos com desenvolvimento de sites com a identidade visual do seu negócio.
    Divulgue sua empresa através de um website bonito, totalmente responsivo e usando as tecnologias mais modernas do mercado.`,
    imgSrc: '/assets/website.svg',
    position: 'left',
  },
  {
    title: 'Desenvolvimento de apps',
    description: `Tire aquela sua ideia milionário do papel com nosso serviço de desenvolvimento de aplicativos mobile.
    Desenvolvemos aplicativos modernos para iOS e Android com a cara do seu negócio.`,
    imgSrc: '/assets/mobileapp.svg',
    position: 'right',
  },
  {
    title: 'Computação em nuvem',
    description: `Está precisando armazenar dados em nuvem ou quer máquinas ou servidores potentes que não ocupem espaço físico no seu negócio?
    Nós temos soluções seguras e inteligentes para sua necessidade.`,
    imgSrc: '/assets/cloud.svg',
    position: 'left',
  },
  {
    title: 'Help Desk',
    description: `Com nosso atendimento 100% remoto, fornecemos para o seu negócio atendimento ultra rápido, ótima eficiência e segurança sempre.
    Nossos atendimento são feitos por pessoas treinadas na área da tecnologia e utilizam softwares modernos para fazer o atendimento através de conexão remota.`,
    imgSrc: '/assets/helpdesk.svg',
    position: 'right',
  },
];

export function ServicesSection(): JSX.Element {
  return (
    <>
      <div id="ourservices" className={styles.container}>
        <div className={styles.content}>
          <h2>Nossos serviços</h2>

          {services.map(service => (
            <ServiceItem
              title={service.title}
              description={service.description}
              imgSrc={service.imgSrc}
              position={service.position}
            />
          ))}
        </div>
      </div>
    </>
  );
}
