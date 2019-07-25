// CODE here for your Lambda Classes
class Person {
    constructor(base){
        this.name = base.name;
        this.age = base.age;
        this.location = base.location;}
        spark(){
            console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
        }
    }

class Instructor extends Person{
    constructor(basetwo){
        super(basetwo);
   this.specialty = basetwo.specialty;
   this.favLanguage = basetwo.favLanguage;
   this.catchPhrase =  }


}
