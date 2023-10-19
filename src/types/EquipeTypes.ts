export interface ICard {
    id?:string
    customClass:string,
    nome:string, 
    srcFoto:string,
    tipo:string, 
    github?:string, 
    linkedin:string, 
    ano:string 
}

export interface ICardDescriptionProps{
    nome :string; 
    tipo: string; 
    ano:string; 
  
  }

export interface IRenderMembersProps{
    data : ICard[], 
    customClass: string, 
    cardClass:string,
    imgContainerClass: string
}

export interface IEquipeData {
    alunos: ICard[];
    tutores: ICard[];
    exAlunos: ICard[];
    exTutores: ICard[];
}


export enum BlurStyles {
    WithBlur = "blur(2px) grayscale(80%) brightness(0.5)",
    NoBlur = "blur(0px) grayscale(0%)",
}
  
