import { Founder } from '../Founder';
import styles from './aboutus.module.scss';

interface Founder {
  name: string;
  imgSrc: string;
}

const founders: Founder[] = [
  {
    name: 'Alisson Silva',
    imgSrc: '/images/alisson.jfif',
  },
  {
    name: 'Caique Marques',
    imgSrc: '/images/caique.jfif',
  },
  {
    name: 'Marco Pereira',
    imgSrc: '/images/marco.jfif',
  },
  {
    name: 'Matheus Fereira',
    imgSrc: '/images/matheus.jfif',
  },
];

export const AboutUs: React.FC = () => {
  return (
    <>
      <div className={styles.container} id="aboutus">
        <div className={styles.content}>
          <h2>Sobre nós</h2>
          <p>
            A <b>Techno Logic</b> é uma empresa que chegou no mercado em 2021 e
            atua no segmento de TI desde então, fornecendo serviços inteligentes
            de TI e eficientes para os nossos clientes.
          </p>
          <p>
            Nossos serviços vão desde desenvolvimento de softwares até mesmo
            serviços em cloud, como storage, backups e áreas de trabalhos
            remotos.
          </p>
          <p>
            Estamos sempre em constante evolução e preocupados com a satisfação
            dos nossos clientes, por isso temos uma equipe totalmente capacitada
            e preparada para novos desafios.
          </p>
          <p>Conheça os fundadores:</p>

          <div>
            {founders.map(founder => (
              <Founder imgSrc={founder.imgSrc} name={founder.name} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
