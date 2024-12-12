# Overview
This is a weather dashboard that fetches weather data from Openweather API and stores user preferences and weather data in a cloud database.

### Description
The software interacts with a cloud database. It includes two tables that stores data for user preference and weather data. It demonstrates the ability to insert, modify, delete, and retrieve (or query) data.

### Purpose
The purpose of this software is to demonstrate the use of a cloud database (MongoDB) to store data. Postman to test different API end points such as post, put, get, and delete. Also, to demonstrate the use of Node.js and it's dependecies and frameworks.

### Link to video
[Software Demo Video](https://youtu.be/HUzFA14_DZ0)

# Cloud Database
I am using MongoDB as my cloud database for storing the informations provided by the user and also the weather data retrived from Openweather API.

### Database Structure
The database consists of two tables:
- Userpreferences
- Weatherdatas

# Development Environment
### Tools Used
The software is developed using Visual Studio Code as the IDE. Node.js and the Node Package Manager (NPM). Express.js for building the software and other dependencies such as Nodemon for development.

### Language used
The software is built with JavaScript programming language. 

### Libraries used
- Express.js
  
# Useful Websites

- [Stack Overflow](https://stackoverflow.com/)
- [WIKIPEDIA](https://en.wikipedia.org/wiki/List_of_JavaScript_libraries)

# Future Work

- Display user-friendly error messages in the UI when an issue occurs (e.g., invalid location, API downtime).
- Add the ability to view past weather trends using stored WeatherData.
- Integrate authentication (e.g., JWT, OAuth) to manage user accounts and secure the application
