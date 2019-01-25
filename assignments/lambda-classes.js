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
}