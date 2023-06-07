import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './CardAluno.module.css';



function CardAluno({ nome, srcFoto, ano, tipo,lattes, mail, github, linkedin }) {
  function Evento() {
    console.log('Teste do evento');
  }

  var altFoto = `Foto de ${nome}, integrante do PET ADS do IFSP Sao Carlos`;

  return (
    <div className={styles.card}>
      <img
        onMouseOver={Evento}
        className={styles.img}
        src={srcFoto}
        alt={altFoto}
      />
      <div className={styles.descricao}>
      <p className={styles.p}>{nome}</p>
        <p className={styles.p}>
          <b>Ingresso:</b> {ano}<br></br>
          <b>Tipo:</b> {tipo}
        </p> 
      </div>
      <div className={styles.iconsContainer}>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FaGithub className={styles.icon} />
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className={styles.icon} />
        </a>
        
      </div>
    </div>
  );
}
export default CardAluno;
