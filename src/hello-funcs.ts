
import type { Human } from './types';

export function helloWorld(): string {
    return "Hello, World!";
  }
export function helloYou(name:string) :string {
    if (!name || typeof name !== 'string') {
        return 'Erreur dans le nom.';
    }
    return `hello , ${name}!`;
}
export function helloHuman(x:Human):string{
    if (!x.firstname || !x.lastname || typeof x.firstname !== 'string' || typeof x.lastname !== 'string') {
        return 'Erreur veuillez mettre un nom ou prenom valide';
    }
    if (!x.birthyear || typeof x.birthyear !== 'number' || x.birthyear > new Date().getFullYear()) {
        return 'veuillez donner un nombre pour l annne de naissance valide ';
    }
    const annee=new Date().getFullYear();
    const age=annee-x.birthyear;
    return `hello,${x.lastname} ${x.firstname}, you are ${age} years old`
}
export function repeatHelloYou(n:number,name:string):string{
    if (!name || typeof name !== 'string') {
        return 'Erreur dans la rubrique de nom';
    }
    if (typeof n !== 'number' || n <= 0) {
        return 'Erreur , vous avez commit une erreur pour le nombre de repetition';
    }
    let result='';
    for(let i=0;i<n;i++){
        result+=helloYou(name) + '\n';
    }
    return result;
}