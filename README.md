Todo App using MongoDB, ExpressJs and ReactJS.

- create-react-app will give basic frontend react app
- In components we have lists, edit, create forms and list container
- I've used react router where you can see id's in params
- In Backend folder we have express and mongo connection
- Inside backend/app we have controllers and models
- Controller will hold all actions to perform and models we have schema
- In routes.js we have all routes and get, post requests to send data to the controller.
- from React, using axios we'll make requests to the backend server and route through each controller actions.

To run this app
- we have two servers frontend and backend
- firstly, npm run start
- and then go to backend folder and run nodemon.

Features
- View all Todos
- add new Todo
- edit Todo
- Delete Todo
- check complete and vice versa
