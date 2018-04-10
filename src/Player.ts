class Player {
  private _name: string;
  private _info: string;
  
  constructor(name: string) {
    this._name = name;
    this._info = "dit een placeholder";
  }
  
  set name(name: string) {
    this._name = name;
  }
  
  get name() {
    return this._name;
  }
  
  set info(info : string){
    this._info = info;
  }
  
  get info() {
    return this._info;
  }
  
}