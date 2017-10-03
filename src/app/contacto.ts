export class Contacto {
  constructor(
    public id:number,
    public nombre:string,
    public apellidos:string,
    public movil?:string, //lo dejamos como string porque no vamos a hacer operaciones con él.
    public email?:string, //con ? lo hago opcional.
    public facebook?:string,
    public twitter?:string){

  }
}
