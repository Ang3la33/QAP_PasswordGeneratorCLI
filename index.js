#!/usr/bin/env node

const process = require('node:process');


// Default value(s)
// Default password length
let length = 8; 


// Function(s)
// Function to generate password with lowercase letters
const generatePassword = (length) => {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    // Initialize password variable
    let password = " ";
    // Loop to generate random lowercase characters 
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * lowercase.length);
        password += lowercase[randomIndex];
    }
    // Return the randomly generated password
    return password;
};


// Function to display help message
const displayHelp = () => {
    console.log(`
        Password Generator CLI
        ~~~~~~~~~~~~~~~~~~~~~~

        Options:
        --length <number>      Specify the length of the password (default = 8)
        --help                 Display this help message
        
        `);
};




const userArguments = process.argv;

