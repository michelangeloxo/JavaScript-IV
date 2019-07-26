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
   this.catchPhrase = basetwo.catchPhrase;}

   demo(subject){
       console.log(`Today we are learning about ${subject}`);
   }

   grade(student, subject){
       console.log(`${student.name} receives a perfect score on ${subject}`)
   }


}

class  Student extends Person{
    constructor(basethree){
    super(basethree);
    this.previousBackground = basethree.previousBackground;
    this.classname = basethree.classname;
    this.favSubjects = basethree.favSubjects;
    this.grade = basethree.grade;
}

listSubjects(){ 
    console.log( `${this.favSubjects}`)
}

PRAssignment(subject){
    console.log(`${this.name} has submitted a PR for ${subject}`);
}

sprintChallenge(subject){
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
}


}

class ProjectManager extends Instructor{
    constructor(basefour){
        super(basefour);
        this.gradClassName = basefour.gradClassName;
        this.favInstructor = basefour.favInstructor;

    }
standUp(channel){
    console.log(`${name} announces to ${channel}, @channel standy times!​​​​​`);
}

debugsCode(student, subject){
    console.log(`${name} debugs ${student.name}'s code on ${subject}`);
}

}


const Amanda = new Instructor({
    name: "Amanda",
    age: 33,
    location: "Cancun",
    specialty: "HTML & CSS",
    favLanguage: "French",
    catchPhrase: "Are you sleeping in class Michael?"
  });
  
  const Jhamar = new Instructor({
    name: "Jhamar",
    age: 27,
    location: "Inglewood, CA",
    specialty: "Node",
    favLanguage: "Web Development",
    catchPhrase: "Dude, that's sick!"
  });
  
  
  let Cindy = new Student({
    name: "Cindy",
    age: 26,
    location: "Santa Ana",
    previousBackground: "Make-Up Artist",
    className: "WEB22",
    favSubjects: ["Javascript", "CSS", "PHP"],
    grade: 91
  });
  
  let Darius = new Student({
    name: "Darius",
    age: 28,
    location: "Texas",
    previousBackground: "NFL Player",
    className: "WEB20",
    favSubjects: ["Javascript", "HTML", "Python"],
    grade: 91
  });


  Amanda.demo("DoorDash");
Amanda.grade(Cindy, "DoorDash Project");
Amanda.spark();

Jhamar.demo("Full Stack Web Development");
Jhamar.grade(Darius, "HTML Project");
Jhamar.spark();

Cindy.spark();
Cindy.listSubjects();
Cindy.PRAssignment("Driving Speed Limit");
Cindy.sprintChallenge("Drifting");

Darius.spark();
Darius.listSubjects();
Darius.PRAssignment("JavaScript");
Darius.sprintChallenge("Redux");