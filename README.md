# Topiccit

#### Full-stack web application modelled after Reddit that allows users to create Topics, Posts, Comments, and both Favorite and Upvote/Downvote Posts.

## Features
* Public Topics, Posts, and Comments available to be read by any user/visitor.
* Signed-in user accounts allow creation, updating, and deleting of Posts and Comments, and Favoriting/Voting.
* Signed-in "admin" users can create Topics.
* Signed-in user profile lists Posts, Comments, and Favorites of user.

## Technologies
* Node backend with Express framework.
* Server-rendered pages using EJS templates.
* Sequelize ORM with PostgreSQL database.
* Tests written in Jasmine.
* User authentication via Passport.
* Styling (or lack therof) with Bootstrap. Just enough to get things up and running, as the name indicates.

## Comments and Complications
This application is based on a project completed for the Bloc Web Developer Track program. It is operational on my local machine, and in a [live deployment on Heroku](https://topiccit.herokuapp.com/). There are some unfinished features, however, and some improvements to be made:

* There is a "Banner" resource that has been started, but not completed. I intend to implement an image upload feature associated with this.
* There are "Rule", "Advertisement", and "Flair" resources that have been started, but not completed.
* Error handling/flash messaging could be more elegant and consistent in some cases.
* I'm not positive that the project as it stands is robust enough for a true, real-world production deployment.

## Usage
I am using this project for learning and experimentation with technologies. If you choose to clone it, please be aware of some things:

* You'll need to create a `.env` file in the root folder of your version of the project, and add a `cookieSecret` variable set to equal a string of your choosing.
* The versions of all packages in `package.json` are carefully restricted. Allowing some of them to update to anything other than bug-fix versions will/may result in breaking changes (I'm lookin' at you Sequelize, express-validator and Request).
* Create and configure your local databases using the Sequelize CLI and the `src/db/config/congig.json` file.
* Some seed files are included. Run using `sequelize db:seed:all`.
* Run tests with `npm test`.
* Start the app locally with `npm start`.
