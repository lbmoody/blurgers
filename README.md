# blurgers
A simple crud mvc application built using mysql, node, express, and a handmade orm.
To see the deployed application click here

## installation
This application utilizes 4 npm packages. Please run an `npm i` or `npm install` prior to running the application locally. Also in the db/ folder there is a schema and seed.sql files that need to be run in your local sql server to have the database interaction. Then type `node server.js` into your command prompt to start the application locally.

## usage
This application was an introduction to the mvc arcitecture. The user is presented with two lists uneaten and devoured burgers. This list relates to the devoured column in the burgers table that holds boolean values. Users can click the `Eat this Burger` button to set the devoured value to true and moving the burger to the devoured card. Users may then click the `Regurgitate` button and send the burger back to the uneated burgers card.

Any burgers that the user no longer wants in either card can be deleted by clicking the delete button.

Finally users may create a new burger via the form at the bottom of the page. When building the burger you can decide which column the burger will populate in by selecting `Eat it right away` to place the burger in the devoured card. Or choose `I prefer to admire my food first` to place the burger in the uneaten card.

## screenshots

![image](https://user-images.githubusercontent.com/24512590/73586773-4b15cd00-446f-11ea-8a72-e62d15747bc7.png)
