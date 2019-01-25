// CODE here for your Lambda Classes


class Person {
    constructor(attributes){
        this.name = attributes.name
        this.gender = attributes.gender
        this.age = attributes.age
        this.location = attributes.location
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person{
    constructor(attributes){
        super(attributes)
        this.specialty = attributes.specialty
        this.favLanguage = attributes.favLanguage
        this.catchPhrase = attributes.catchPhrase
    }
    demo(subject) {
        console.log(`Today we are going to be learning about ${subject}`)
    }
    grade(student, subject){
        console.log(`${student.name} recieves a perfect score on ${subject}`)
    }
}

class Student extends Person{
    constructor(attributes){
        super(attributes)
        this.previousBackground = attributes.previousBackground
        this.className = attributes.className
        this.favSubjects = attributes.favSubjects
    }
    listSubjects(){
        this.favSubjects.forEach(subject => console.log(subject))
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a pull request for ${subject}`)
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge for ${subject}`)
    }
}

class ProjectManager extends Instructor{
    constructor(attributes){
        super(attributes)
        this.gradClassName = attributes.gradClassName
        this.favInstructor = attributes.favInstructor
    }
    standUp(slack){
        console.log(`${this.name} announces ${slack}, @channel study times!`)
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

const Jane = new Instructor({
    name: 'Jane',
    location: 'New Orleans',
    age: 32,
    gender: 'female',
    favLanguage: 'Python',
    specialty: 'Databases',
    catchPhrase: `If its a number, I can add it`
});