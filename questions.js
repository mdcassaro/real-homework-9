const inquirer = require("inquirer");

function mainMenu(){
    return inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "Please choose an option",
            choices: ["Search titles by artist", "Exit"]
        }
    ])
}

function askArtist(){
    return inquirer.prompt([
        {
            type: "input",
            name: "artist",
            message: "What artist do you want to look up?",
        }
    ])
}

module.exports = {
    mainMenu,
    askArtist
}