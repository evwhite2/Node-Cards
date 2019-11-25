const inquirer = require("inquirer");
const Employee = require("./Develop/lib/Employee");
const Engineer = require("./Develop/lib/Engineer");
const Manager = require("./Develop/lib/Manager");
const Intern = require("./Develop/lib/Intern");


var fs = require("fs");
// const outputFile = require("./output/output.html");

var engineers = [];
var managers = [];
var interns = [];
var engineerCards = [];
var managerCards = [];
var internCards = [];

//question sets:





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
        message:"Input the intern's email address:"
    },
    {
        name: "school",
        type:"input",
        message:"Input the intern's school:"
    }
];



async function runTeamBuilder(){
    console.log("running Team Builder...");
    
    await typify();
    
    

}

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
            type:"number",
            message:"Input interns's school name:"
        }
    ];
    
    inquirer.prompt(internQ).then(info =>{
        const teammate = new Intern(info.name, info.id, info.email, info.school);
        managers.push(teammate);
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


// function addEngineers(){

    
//     engineers.forEach(function(info){
        
//     const newCard =
//         `<div class="card">
//         <h1>${info.name}<h1>
//         <h2>Role</h2>
//         <img src="stockPhoto.jpg">
//         </div>

//         <div class="card-body">
//         <p>${info.github}</p> 
//         <p>${info.email}</p>
//         <p>Id Number: ${info.id}</p>
//         </div>

//         </div>`;
        
//         engineerCards.push(newCard);
//     });

//         try{
//         fs.appendFileSync("./output/engineer.html", `${engineerCards}</div></body></html>`);
//         }
//         catch {
//             console.error("Unable to write to engineer file.");
//         };
// };        
        
// function addManagers(){

//     managers.forEach(function(info){
        
//     const newCard =
//         `<div class="card">
//         <h1>${info.name}<h1>
//         <h2>Role</h2>
//         <img src="stockPhoto.jpg">
//         </div>

//         <div class="card-body">
//         <p>${info.github}</p> 
//         <p>${info.email}</p>
//         <p>Id Number: ${info.id}</p>
//         </div>

//         </div>`;
        
//         managerCards.push(newCard);
//     });

//         try{
//         fs.appendFileSync("./output/manager.html", `${managerCards}</div></body></html>`);
//         }
//         catch {
//             console.error("Unable to write to manager file.");
//         };
// };  

// function addInterns(){

//     interns.forEach(function(info){
        
//     const newCard =
//         `<div class="card">
//         <h1>${info.name}<h1>
//         <h2>Role</h2>
//         <img src="stockPhoto.jpg">
//         </div>

//         <div class="card-body">
//         <p>${info.school}</p> 
//         <p>${info.email}</p>
//         <p>Id Number: ${info.id}</p>
//         </div>

//         </div>`;
        
//         internCards.push(newCard);
//     });

//         try{
//         fs.appendFileSync("./output/intern.html", `${internCards}</div></body></html>`);
//         }
//         catch {
//             console.error("Unable to write to intern file.");
//         };
// };  



runTeamBuilder();


