# Test-Altran-backend

## Author

Carlos Navas Buzón (dante.manaics@gmail.com)

## Version

1.0.0

## Description

Level test for altran, consists of an API made in nodejs, the express minimalist 
framework has been chosen to carry it out. The data will be saved in a database 
in MongoDB. The data will be inserted automatically at the start of the project, 
checking that they were not before. A password is created to be able to login through 
the Brcypt library which is saved in the bbdd, the syntax of this password is the 
client name + 1234.

Example:

- client name: Carlos
- password: Carlos1234

## Dependencies

- bcrypt: 1.0.3
- body-parser: 1.5.1
- express": 4.16.2
- jsonwebtoken": 8.1.0
- mocha": 4.0.1
- mongoose": 4.13.0
- morgan": 1.9.0

# Deploy Project

Here we will explain how to deploy the project step by step:

- NodeJs and NPM must be installed
- sudo npm install (Install Dependencies)
- Mongodb must be installed (The database, collections and datas will be created alone 
  when the project starts)
- node server.js (Run Project)