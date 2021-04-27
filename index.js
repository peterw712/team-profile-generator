const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const createTeam = require('./src/template')

//array to store profiles
const teamProfiles = [];

function managerPrompt() {
    inquirer.prompt([
        {
            type: 'text',
            name: 'managerName',
            message: 'What is the name of your manager?'
        },
        {
            type: 'text',
            name: 'managerID',
            message: "What is your manager's ID number?"
        },
        {
            type: 'text',
            name: 'managerEmail',
            message: "What is your manager's email address?"
        },
        {
            type: 'text',
            name: 'managerOfficeNumber',
            message: "What is your manager's office number?"
        }
    ])
    .then(function(answers) {
        const manager = new Manager(
            answers.managerName,
            answers.managerID,
            answers.managerEmail,
            answers.managerOfficeNumber)
        teamProfiles.push(manager);
        addEmployee();
    })
};


managerPrompt();


function addEmployee() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'addEmployee',
            message: "Add an engineer or an intern, or choose 'finish building team' if you're done",
            choices: [
                'Engineer',
                'Intern',
                'Finish building team'
            ],
        },
    ])
        .then(function (choices) {
            switch (choices.addEmployee) {
                case 'Engineer':
                    engineerPrompt()
                    break;
                case 'Intern':
                    internPrompt()
                    break;
                case 'Finish building team':
                    completeTeam();
                    console.log(teamProfiles);
                    
        }
    })

};

function engineerPrompt() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'engineerName',
          message: 'What is the name of the engineer?',
        },
        {
          type: 'input',
          name: 'engineerID',
          message: "What is the engineer's id?",
        },
        {
          type: 'input',
          name: 'engineerEmail',
          message: "What is engineer's email address?",
        },
        {
          type: 'input',
          name: 'engineerGit',
          message: "What is the engineer's username for GitHub?",
        },
      ])
      .then(function (answers) {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerID,
          answers.engineerEmail,
          answers.engineerGit
        );
        teamProfiles.push(engineer);
        addEmployee();
      });
};

function internPrompt() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'internName',
          message: 'What is the name of the intern?',
        },
        {
          type: 'input',
          name: 'internID',
          message: "What is the intern's ID?",
        },
        {
          type: 'input',
          name: 'internEmail',
          message: "What is the intern's email address?",
        },
        {
          type: 'input',
          name: 'internSchool',
          message: 'Which school does the intern go to?',
        },
      ])
      .then(function (answers) {
        const intern = new Intern(
          answers.internName,
          answers.internID,
          answers.internEmail,
          answers.internSchool
        );
        teamProfiles.push(intern);
        addEmployee();
      })
};
//write html file with the template's data
function completeTeam() {
    fs.writeFile('./dist/myTeam.html', createTeam(teamProfiles), err => {
        if (err) {
            console.log(err);
        }
        console.log('Team generated!');
    });
};
        
        

        

