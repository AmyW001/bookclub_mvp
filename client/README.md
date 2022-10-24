# Book Club MVP

## Project Name:

Book Club Collective

## Project Description:

An online book club for people who prefer to connect over the internet, or aren't able to travel.

## How initialize it:

Install React Router, Express and Bootstrap using NPM.

1. Open your console, and inside the project in the "client" folder use "npm start" or "npm run start" this will open: http://localhost:3000/
2. In another window of your console, inside the project use "npm start" this will access the database, and to open it you must use: http://localhost:5001
3. In another window of your console, and inside the project in the "client" folder use "mysql -u root -p" the password is "root" this will help you to access the Database in MySQL

## Back End:

1. Database: The Database is called "bookmvp"
2. Table: The table inside the database is called "admins".
3. The endpoints all exist in "app.js"

## Front End:

Components:

1. Create_form - a form to create a new club and register your sign up details (name, name of club and password)
2. Find_club - The searchbar for finding a club by club name
3. Landing_page - The first page the user sees which gives them the option to sign in, create a club or find one to join
4. Main_page - The main page for each club, this was supposed to change dynamically depending on the club name
5. Sign_in - the form to sign in with name, name of club and password

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
