class Encapsulator{
  constructor(name: string){
    this.name = name;
  }
  private name: string;

  get getName(): string {
    return this.name;
  }
  set setName(name: string){
    this.name = name;
  }
}

const encapsulator = new Encapsulator('Ekomobong');
console.log(encapsulator.getName)
//console.log(encapsulator.name) // This should throw an error, saying that the member is private.