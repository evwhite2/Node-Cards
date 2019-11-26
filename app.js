const inquirer = require("inquirer");
const Employee = require("./Develop/lib/Employee");
const Engineer = require("./Develop/lib/Engineer");
const Manager = require("./Develop/lib/Manager");
const Intern = require("./Develop/lib/Intern");


var fs = require("fs");

var engineers = [];
var managers = [];
var interns = [];
var engineerCards = [];
var managerCards = [];
var internCards = [];


async function runTeamBuilder(){
    console.log("running Team Builder...");
    
    await typify();
};

 async function addNew(){
    const addQ =[
    {
        name:"another",
        type:"confirm",
        message:"Would you like to add another employee:"
    }
];

  await inquirer.prompt(addQ).then(choice =>{
    if(choice.another){
        typify();
    }else{
        addEngineers();
        addManagers();   
        addInterns();
        addAll();
        process.exit(0);
    }


    });
};

function writeEngineer(){ 
    const engineerQ =[
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
        {
            name: "github",
            type:"input",
            message:"Input the employee's github username:"
        }
    ];

    inquirer.prompt(engineerQ).then(info =>{
         let teammate = new Engineer(info.name, info.id, info.email, info.github);
         engineers.push(teammate);
        addNew();
     }); 

};

function writeManager(){  

    const managerQ =[
        {
            name:"name",
            type:"input",
            message:"Input the name of manager:"
        },
        {
            name:"id",
            type:"number",
            message:"Input the manager's id number:",
        }, 
        {
            name: "email", 
            type:"input",
            message:"Input the manager's email address:"
        },
        {
            name: "officeNumber",
            type:"number",
            message:"Input manager's office number:"
        }
    ];
    
    inquirer.prompt(managerQ).then(info =>{
        const teammate = new Manager(info.name, info.id, info.email, info.officeNumber);
        managers.push(teammate);
        addNew();
    });
};

function writeIntern(){  

    const internQ =[
        {
            name:"name",
            type:"input",
            message:"Input the name of intern:"
        },
        {
            name:"id",
            type:"number",
            message:"Input the intern's id number:",
        }, 
        {
            name: "email", 
            type:"input",
            message:"Input the intern's email address:"
        },
        {
            name: "school",
            type:"input",
            message:"Input interns's school name:"
        }
    ];
    
    inquirer.prompt(internQ).then(info =>{
        const teammate = new Intern(info.name, info.id, info.email, info.school);
        interns.push(teammate);
        addNew();
    });
};


function typify(){

    const typeQuestion =[
        {
            name: "role",
            type: "list",
            message: "Please select the teammember role you are looking to input into the system.",
            choices: ["Engineer", "Intern", "Manager"]
        }
    ];

    inquirer.prompt(typeQuestion).then(choice =>{

        if (choice.role == "Engineer"){
            writeEngineer();
       } else if (choice.role == "Intern"){
           writeIntern();
       } else if (choice.role == "Manager"){
           writeManager();
       } else {
           typify();
       };        
    }); 

    
};

function addEngineers(){
    
    engineers.forEach(info => {    
        const newCard =
            `<div class="card">
            <div class="card-head">
            <h1>${info.name}<h1>
            <h2>Engineer</h2>
            <img src="stockPhoto.jpg">
           </div>

            <div class="card-body">
            <p>Email: ${info.email}</p> 
            <p>GitHub: ${info.github}</p>
            <p>Id Number: ${info.id}</p>
            </div>
            </div>`;

            engineerCards.push(newCard);
        });

        try{
        fs.appendFileSync("./output/engineer.html", `${engineerCards}</div></body></html>`);
        }
        catch {
            console.error("Unable to write to engineer file.");
        };
};        
        
function addManagers(){

    managers.forEach(function(info){
        
    const newCard =
        `<div class="card">
        <div class="card-head">
        <h1>${info.name}<h1>
        <h2>Manager</h2>
        <img src="stockPhoto.jpg">
        </div>

        <div class="card-body">
        <p>Email: ${info.email}</p> 
        <p>Id Number: ${info.id}</p>
        <p>Office: ${info.officeNumber}</p>
        </div>
        </div>`;

        managerCards.push(newCard);
    });

        try{
        fs.appendFileSync("./output/manager.html", `${managerCards}</div></body></html>`);
        }
        catch {
            console.error("Unable to write to manager file.");
        };
};  

function addInterns(){

    interns.forEach(function(info){
        
    const newCard =
        `<div class="card">
        <div class="card-head">
        <h1>${info.name}<h1>
        <h2>Intern</h2>
        <img src="stockPhoto.jpg">
        </div>

        <div class="card-body">
        <p>Email: ${info.email}</p> 
        <p>Id Number: ${info.id}</p>
        <p>School: ${info.school}</p>
        </div>
        </div>`;     

        internCards.push(newCard);
    });

        try{
        fs.appendFileSync("./output/intern.html", `${internCards}</div></body></html>`);
        }
        catch {
            console.error("Unable to write to intern file.");
        };
};  

function addAll(){
    //need to figure out how to iterate the array of cards to print correctly to the page.
        var mainContent =
        `
        <div>
        <h1>Managers</h1>
        ${managerCards}
        </div>

        <div>
        <h1>Engineers</h1>
        ${engineerCards}
        </div>

        <div>
        <h1>Interns</h1>
        ${internCards}
        </div>
        </div></body></html>`

        try{
        fs.appendFileSync("./output/main.html", mainContent);
        }
        catch {
            console.error("Unable to write to main file.");
        };
};  


runTeamBuilder();


