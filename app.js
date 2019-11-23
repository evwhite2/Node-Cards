const inquirer = require("inquirer");
const Employee = require("./Develop/lib/Employee");
var team = [];

async function runTeamBuilder(){
    console.log("running Team Builder...");
    
    await addMember();
    
    addCard();
    
    console.log("complete");
}

async function addMember(){

    const employeeQuestions =[
        {
            name:"name",
            type:"input",
            message:"Input the name of employee:"
        },
        {
            name:"id",
            type:"number",
            message:"Input the employee's id number:",
            // validate: id=>{
            //     const integer = parseFloat(id);

            //     return new Promise((resolve, reject) => {
            //         if (integer= isNaN) {
            //             reject("Must be a unique number");
            //         }
            //         resolve;

            //     });
            // }
        }, 
        {
            name: "email", 
            type:"input",
            message:"Input the employee's email address:"
        },
        {
            name: "github",
            type:"input",
            message:"Input the employee's github username:"
        }
        // {
        //     name: "end",
        //     type:"confirm",
        //     message:"Employee added. Would you like to input another employee's information?",
        // }
    ];

    await inquirer.prompt(employeeQuestions).then(function(employeeQuestions){
        const teammate = new Employee(employeeQuestions.name, employeeQuestions.id, employeeQuestions.email, employeeQuestions.github);
        JSON.stringify(teammate);
        console.log(teammate);
        team.push(teammate);
    });
    
    // return teammate
};



runTeamBuilder();


