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
        console.log(`${this.name} has begun a sprint challenge for ${subject}`)
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

//NEW INSTRUCTORS fred and jane

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

const jane = new Instructor({
    name: 'Jane',
    location: 'New Orleans',
    age: 32,
    gender: 'female',
    favLanguage: 'Python',
    specialty: 'Databases',
    catchPhrase: `If its a number, I can add it`
});

//New Students blake and Jasmine

const blake = new Student({
    name: 'Blake',
    location: 'Little Rock',
    age: 22,
    gender: 'Male',
    previousBackground: 'Roof Sweeper',
    className: 'FSW PT2',
    favSubjects: ['Gardening', 'Herbology', 'Alchemy']
  });

const jasmine = new Student({
    name: 'Jasmine',
    location: 'Little Rock',
    age: 22,
    gender: 'female',
    previousBackground: 'dishwasher',
    className: 'FSW Fulltime 4',
    favSubjects: ['Math', 'English', 'Grammer']
  });

  //NEW PROJECT MANAGERS MARGO AND CARLOS

  const margo = new ProjectManager {
    name: 'Margo',
    location: 'Eastville',
    age: 36,
    gender: 'female',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Keep on keeping on`,
    gradClassName: `FSW FT1`,
    favInstructor: 'Jasmine'
  });
}

const carlos = new ProjectManager {
    name: 'Carlos',
    location: 'Brookton',
    age: 29,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Back-end',
    catchPhrase: `Hustle till you drop`,
    gradClassName: `FSW PT1`,
    favInstructor: 'Fred'
  });
}