//console.log("Hello via Bun!");
import {repeatHelloYou,helloHuman, helloWorld,helloYou} from './hello-funcs';
import {type Human} from './types';
const johnDoe:Human={
    firstname:"John",
    lastname:"Doe",
    birthyear:1980,
};
//const msg=helloHuman(johnDoe);
//const msg=helloWorld();
//const msg=helloYou('john');
const msg=repeatHelloYou(4,"Idriss");

console.log(msg);