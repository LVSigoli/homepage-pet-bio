import "./projetos.css";
import React from "react";
import { IProject } from "../../types/ProjectTypes";
import Header from "../../components/ui/Header/header";
import useIsMobile from "../../hooks/window/useIsMobile";
import FetchProj from "../../hooks/fetch/useFetchProjetos";
import MenuNavegacao from "../../components/menus/MenuNavegacao/menuNavegacao";
import { renderProjetos } from "./SubComponentes/Render/RenderProjects";

export default function Projetos() {
  const isMobile = useIsMobile();

  return (
    <>
      <MenuNavegacao />
      <div className="menu-projetos--corpo">
        <Header texto={isMobile ? "Projetos do PET/ADS" : "Projetos Desenvolvidos pelo PET/ADS"} />
        <section className="menu-projetos">
          <FetchProj render={(arrProjetos: IProject[]) => renderProjetos(arrProjetos)} />
        </section>
      </div>
    </>
  );
}
