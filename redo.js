const inquirer = require("inquirer");
const Employee = require("./Develop/lib/Employee");
const Engineer = require("./Develop/lib/Engineer");
const Intern = require("./Develop/lib/Intern");


var fs = require("fs");


var engineers = [];
var interns = [];

const mainQs =[
    
    {
        name: "role",
        type: "list",
        message: "Please select the teammember role you are looking to input into the system.",
        choices: ["Engineer", "Intern", "Manager"]
    },
    {
        name:"name",
        type:"input",
        message:"Input the name of employee:"
    },
    {
        name:"id",
        type:"number",
        message:"Input the employee's id number:",
    }, 
    {
        name: "email", 
        type:"input",
        message:"Input the employee's email address:"
    },
];

const gitQ =[
    {
        name: "github",
        type:"input",
        message:"Input the employee's github username:"
    }
];

const schoolQ =[
    {
        name: "school",
        type:"input",
        message:"Input the employee's school:"
    }
];

const addMoreQ = [
    {
        name: "addMore",
        type:"confirm",
        message:"Woud you like to add another teammate?"
    }
]

async function runTeamBuilder(){
    await gather();

    console.log("conplete");
};

async function gather(){
    await inquirer.mainQs(answers=>{
        if (answers.role =="engineer"){
            const e = new Engineer(answers.name, answers.id, answers.email, )
            inquirer.gitQ.then(answers=>{

            })
        }
    })
    await inquirer
}
