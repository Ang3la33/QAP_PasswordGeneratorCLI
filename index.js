#!/usr/bin/env node

const process = require('node:process');


// Default value(s)
// Default password length is 8 letters
let length = 8; 
// Default does not include numbers
let includeNumbers = false;
// Default does not include uppercase letters
let includeUppercase = false;


// Function(s)
// Function to generate password with lowercase letters
const generatePassword = (length, includeNumbers, includeUppercase) => {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // Start with lowercase characters as per default password
    let passwordCharacters = lowercase;
    // Add numbers if --number flag is provided
    if (includeNumbers) {
        passwordCharacters += numbers;
    }
    // Add uppercase letters if --uppercase flag is provided
    if (includeUppercase) {
        passwordCharacters += uppercase;
    }
    // Initialize password variable
    let password = "";
    // Loop to generate random characters 
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * passwordCharacters.length);
        password += passwordCharacters[randomIndex];
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
        --numbers              Include numbers in the password
        --uppercase            Include uppercase letters in the password
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
    else if (arg === '--numbers') {
        // Set a flag to include numbers in the password
        includeNumbers = true;
    }
    else if (arg === '--uppercase') {
        // Set a flag to include uppercase letters in the password
        includeUppercase = true;
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
const password = generatePassword(length, includeNumbers, includeUppercase);

// Display password
console.log(`Password: ${password}`);

