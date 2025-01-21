#!/usr/bin/env node
// Description: A simple command line tool to generate a random password with specific rules.
// Author: Nicole Sparkes
// Date: 01-20-2025

const { program } = require('commander');

// Helper function to generate a random password
function generatePassword(length, charSet) {
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
    }
    return password;
}

// Helper function to validate password length
function validateLength(length) {
    if (isNaN(length)) {
        console.error('Error: The password length must be a number.');
        process.exit(1);
    }

    if (length < 6 || length > 12) {
        console.error('Error: Password length must be between 6 and 12 characters. Please try again.');
        process.exit(1);
    }

    return length; // Return the validated length
}

// Configure the command line options
program
    .name('password-generator')
    .description('Generate a random password')
    .version('1.0.0')
    .option('-l, --length <number>', 'Length of password (default: 8, min: 6, max: 12)', (value) => validateLength(parseInt(value, 10)), 8)
    .option('-n, --numbers', 'Include numbers in password')
    .option('-s, --symbols', 'Include symbols in password')
    .option('-u, --uppercase', 'Include uppercase letters in password')
    .option('-e, --exclude-similar', 'Exclude similar characters (e.g., i, l, 1, L, o, 0, O)')
    .addHelpText('after', `
Examples:
  $ password-generator -l 10 -n -s -u
  $ password-generator --length 12 --exclude-similar
  $ password-generator --length 6 -n -s
`)
    .parse(process.argv);

// Get parsed options
const options = program.opts();

// Character sets
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const symbols = '!@#$%^&*()-_=+[]{}|;:,.<>?';
const similarChars = 'il1Lo0O';

let charSet = lowercase;

// Add character sets based on options
if (options.uppercase) {
    charSet += uppercase;
}
if (options.numbers) {
    charSet += numbers;
}
if (options.symbols) {
    charSet += symbols;
}
if (options.excludeSimilar) {
    charSet = charSet.split('').filter(char => !similarChars.includes(char)).join('');
}

// Ensure at least one character set is selected
if (!options.uppercase && !options.numbers && !options.symbols) {
    console.log('Warning: No options selected. Defaulting to lowercase letters only.');
}

// Generate the password
const password = generatePassword(options.length, charSet);

// Output the result
console.log(`Generated Password: ${password}`);