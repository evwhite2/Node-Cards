const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name, id, email, officeNumber, github){
        super(name, id, email, github);
        this.officeNumber = officeNumber;
    }

    getRole(){
        return "Manager";
    };

    getOfficeNumber(){
        return this.officeNumber;
    }
};

module.exports = Manager;