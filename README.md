# Password Generator

A simple command-line application built with Node.js to generate secure and customizable passwords.

## Features
- Generate random passwords with:
  - Lowercase letters (default).
  - Optional uppercase letters, numbers, and symbols.
  - Exclude similar characters (e.g., `i`, `l`, `1`, `L`, `o`, `0`, `O`).
  - Exclude ambiguous characters (e.g., `{}`, `[]`, `()`).
  - Fully custom character sets.
- Specify password length (default: 8, min: 6, max: 12).
- Designed to handle invalid inputs gracefully.

## Requirements
- Node.js (version 14 or above recommended)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/NSparkes95/password-generator-javascript.git
