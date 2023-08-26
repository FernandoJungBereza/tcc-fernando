export interface IData{
    id:number,
    title:string
    nome:string,
    caracteristica:string,
    resposta:string
    midia:IMidia
}

export interface IMidia{
    id:number,
    nome:string
}