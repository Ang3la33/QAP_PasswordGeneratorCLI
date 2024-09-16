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


// Process command line arguments
// Slice to remove the first two default arguments
const userArguments = process.argv.slice(2);


// Parse user arguments
for (let i = 0; i < userArguments.length; i++) {
    const arg = userArguments[i];

    if (arg === '--length' && userArguments[i + 1]) {
        const parsedLength = parseInt(userArguments[i + 1], 10);


        // Check if the length is a valid number
        if (!isNaN(parsedLength) && parsedLength > 0) {
            // Set the length to user provided value
            length = parsedLength;
        }
        else {
            console.error('Error: Please provide a valid positive number for the length.');
            // Exit if invalid length provided
            process.exit(1);
        }
        // Skip the next argument as its the value for --length 
        i++;
    }
    else if (arg === '--help') {
        // Display the help message
        displayHelp();
        // Exit after showing help message
        process.exit(0);
    }
    else {
        // Handle unknown arguments
        console.error(`Error: Unknown option "${arg}"`);
        // Display the help message
        displayHelp();
        // Exit on unknown argument
        process.exit(1);
    }
}


// Generate password
const password = generatePassword(length);

// Display password
console.log(`Password: ${password}`);

