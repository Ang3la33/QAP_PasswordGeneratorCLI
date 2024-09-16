#!/usr/bin/env node

const process = require('node:process');


// Default value(s)

// Default password length
let length = 8; 


// Function(s)

// Function to generate password with lowercase letters
const generatePassword = (length) => {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    let password = " ";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * lowercase.length);
        password += lowercase[randomIndex];
    }
    return password;
};



const userArguments = process.argv;

