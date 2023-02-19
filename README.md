# issue-tracker
This project is developed using nodeJs for managing issues or bugs related to the any project.  

## Tech Stack Used

- NodeJs

- MVC Architecture

- Express 
   - ejs
   - views  
   
- CSS 

- JavaScript

- MongoDB 


## Features

### Home page - 

- Shows a list of projects.
- Given a button to create a new Project (On creating a new project , it will appear in the list)

### Create Project Form

- Accept the following fields to create a project
  - Name
  - Description
  - Author

#### Home Page Screenshot

![Screenshot 2023-02-19 at 2 01 36 PM](https://user-images.githubusercontent.com/109090729/219937476-b6f6b7f5-9f10-4e4b-a9ce-71bbdb0985f9.png)


## Project Detail Page
- When the user clicks on a project (in home page) redirect the user to this page which will show bugs related to this project
- User will be able to perform following actions on this page
  - Filter by multiple labels i.e. user will be able to filter by 2 or more labels at the same time
  - Filter by author
  - Search by title and description

### A Form to create an issue
- User should be able to create an issue for a project
- Accept the following fields
  - Title
  - Description
  - Labels (multiple labels can be added to a project, IF a project has a label already it will be shown in filtered list . 
  - Author

#### Create Page Screenshot
![Screenshot 2023-02-19 at 2 01 56 PM](https://user-images.githubusercontent.com/109090729/219937564-2c029a95-eddf-4ff7-8db6-f08199175164.png)

![Screenshot 2023-02-19 at 2 02 04 PM](https://user-images.githubusercontent.com/109090729/219937573-16970792-532c-40cc-aa56-6883f6b6b351.png)



## Available Scripts

In the project directory, you can clone and save it to local system :

First Install all packages used in this project using command 

### `npm install`

then you can start project with the command : 

connect with some database and then

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\

