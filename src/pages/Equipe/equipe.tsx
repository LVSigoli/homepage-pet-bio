import './equipe.css';
import React from 'react';
import Collapsible from 'react-collapsible';
import { EquipeData } from '../../types/EquipeTypes';
import Header from "../../components/ui/Header/header";
import FetchEquipe from '../../hooks/fetch/useFetchEquipe';
import CardTutor from './SubComponentes/Card_Integrantes/CardTutor';
import CardAluno from './SubComponentes/Card_Integrantes/CardAluno';
import CardExAluno from './SubComponentes/Card_Integrantes/CardExAlunos';
import CollapsibleOpen from '../../hooks/collapsible/useCollapsibleOpen';
import CardExTutores from './SubComponentes/Card_Integrantes/CardExTutores';
import MenuNavegacao from '../../components/menus/MenuNavegacao/menuNavegacao';
import CollapsibleTrigger from '../../hooks/collapsible/useCollapsibleTrigger';

export default function Equipe() {
  return (
    <>
      <MenuNavegacao />
      <div className="equipe--corpo">
        <FetchEquipe
          render={({ alunos, tutores, exAlunos, exTutores }: EquipeData) => (
            <>
              <Header texto="Integrantes" />
              <section className="equipe--tutor">
                {tutores.map((tutor) => (
                  <CardTutor
                    key={tutor.id} 
                    github={tutor.github}
                    nome={tutor.nome}
                    tipo={tutor.tipo!}
                    srcFoto={tutor.srcFoto}
                    ano={tutor.ano}
                    linkedin={tutor.linkedin!}
                  />
                ))}
              </section>
              <section className="equipe--alunos">
                {alunos.map((aluno) => (
                  <CardAluno
                    key={aluno.id} 
                    nome={aluno.nome}
                    srcFoto={aluno.srcFoto}
                    tipo={aluno.tipo}
                    ano={aluno.ano}
                    github={aluno.github}
                    linkedin={aluno.linkedin}
                  />
                ))}
              </section>
              <Collapsible
                classParentString="EquipeCollapsible"
                trigger={<CollapsibleTrigger text="Ex-Integrantes" page="Equipe" />}
                triggerWhenOpen={<CollapsibleOpen text="Ex-Integrantes" page="Equipe" />}
              >
                <section className="equipe--tutor">
                  {exTutores.map((exTutor) => (
                    <CardExTutores
                      key={exTutor.id} 
                      nome={exTutor.nome}
                      srcFoto={exTutor.srcFoto}
                      ano={exTutor.ano}
                    />
                  ))}
                </section>
                <section className="equipe--alunos">
                  {exAlunos.map((exAluno) => (
                    <CardExAluno
                      key={exAluno.id} 
                      nome={exAluno.nome}
                      srcFoto={exAluno.srcFoto}
                      linkedin={exAluno.linkedin!}
                    />
                  ))}
                </section>
              </Collapsible>
            </>
          )}
        />
      </div>
    </>
  );
}
