const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school, github){
        super(name, id, email, github);
        this.school = school;
    }

    getRole(){
        return "Intern";
    };

    getSchool(){
        return this.school;
    };
};

module.exports= Intern;