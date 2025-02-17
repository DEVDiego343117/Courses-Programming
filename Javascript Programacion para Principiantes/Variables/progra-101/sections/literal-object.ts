let person = {
    //Objeto literal
    name: "Diego",
    age: 18,
    isActive: true,
    hobbies: ["Basketball", "Music", "Videogames"],

    //Programacion metodo
    toString(printAll:boolean) {
        let objectString = this.name + ' '+ this.age + " " + this.hobbies + " " + this.isActive;
        console.log(objectString);
    }
}

// console.log(person.name.toUpperCase());
person.toString(true);