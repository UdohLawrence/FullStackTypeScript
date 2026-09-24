class Speaker {
  #message: string = '';

  constructor(private name: string) {}

  //getter setter
  get Message() {
    if (!this.#message.includes(this.name)) {
      throw Error("message is missing speaker's name");
    }
    return this.#message;
  }

  set Message(val: string) {
    let tmpMessage = val;

    if (!val.includes(this.name)) {
      tmpMessage = this.name + ' ' + val;
    }
    this.#message = tmpMessage;
  }
}

const speaker = new Speaker('Ekomobong');
speaker.Message = 'Hi';
console.log(speaker.Message)