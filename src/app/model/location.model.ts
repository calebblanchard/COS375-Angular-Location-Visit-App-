export class Location {
  constructor(
    public id?: number,
    public name?: string,
    public town?: string,
    public county?: string,
    public latitude?: number,
    public longitude?: number,
    public fieldWorkerName?: string
  ) { }
}
