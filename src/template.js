//displays roles using methods from classes
function displayRole(profile) {
    if (profile.getRole() === "Manager") {
        return ("Manager");
    } else if (profile.getRole() === "Engineer") {
        return ("Engineer");
    } else if (profile.getRole() === "Intern") {
        return ("Intern");
    };
};

//displays info using methods from classes
function displayInfo(profile) {
    if (profile.getRole() === "Manager") {
        return innerHTML = "Office Number: " + profile.getOfficeNumber();
    } else if (profile.getRole() === "Engineer") {
        return innerHTML = "GitHub: " + `<a href="https://github.com/${profile.getGithub()}">${profile.getGithub()}</a>`;
    } else if (profile.getRole() === "Intern") {
        return innerHTML = "School: " + profile.getSchool();
    }
};

//export this function to index.js to create html file
function createTeam(teamProfiles) {
    //template
    let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Team Profiles</title>
    </head>
    <body>
        <div class="container justify-content-center">
        <div class="row p-3 justify-content-center bg-danger text-white">
        <h1>My Team</h1>
        </div>
        <div class="d-flex flex-wrap p-2">`;
    //dynamically update cards using display functions
    teamProfiles.forEach(profile => {
        let card = `<div class="card m-3" style="width: 20rem;">
                <div class="card-body">
                    <div class= "bg-primary text-white">
                        <h4 class="card-title p-3">${profile.name}</h4>
                        <h5 class="card-title p-3">${displayRole(profile)}</h5>
                    </div>
                    <div>
                        <p class="card-text">ID: ${profile.id}</p>
                        <p class="card-text">Email: <a href="mailto:${profile.email}">${profile.email}</a> </p>
                        <p class="card-text">${displayInfo(profile)}</p>
                    </div>
                </div>
            </div>`;
        html += card;
    })
    html += '</div>';
    return html;
}

module.exports = createTeam;