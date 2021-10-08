# Overview 

## Rachel's Plant Shop - Inventory 
The goal of this project is to create a React app that tracks inventory of at least one. The user is able to increase and decrease the amount of a product. The user also receives an email when the product is at zero. This iteration creates a fictional plant store where the user (an employee) can update inventory and receive an email when there is none of a certain plant in stock. It also allows the user to add new inventory. The project uses a list of 53 plants `plantsList.json` See import.js for steps to upload the json to a cloud Firestore DB.

The project is deployed through [Netlify](https://ctd-plant-shop.netlify.app/) at https://ctd-plant-shop.netlify.app/

TBD: info about authentication & DB configs

## How Does it Work?
Upon opening the web page, the user can search for plants in the shop by name or id or add a new plant to the inventory. 

## Next Steps
1. Create Node/Express Backend with MongoDB
1. Add Testing 

# Requirements To Set Up Locally
1. A command line application such as Terminal.
1. [Git](https://git-scm.com/) version control and a [GitHub account](https://github.com/).
    - You can check to see if Git is already installed on your computer by typing `git --version` into your command line application. If it is installed it will list the currently installed version (e.g. `git version 2.18.0`).
    - If you prefer to use a GUI to work with version control, GitHub offers a [free desktop app](https://desktop.github.com).
1. [Node.js](https://nodejs.org/en/), a programming environment powered by JavaScript.
    - You can check to see if Node.js is already installed on your computer by typing `node -v` into your command line application. If it is installed it will list the currently installed version (e.g. `v10.2.1`). 
    - It may also be helpful to use a program such as [nvm](https://github.com/creationix/nvm) to help manage your Node.js versions. This will ensure that the version of Node.js your computer uses to run various things won't conflict with an updated version.

## Clone project locally 
1. Clone this repository by entering this command into your command line application: `git clone https://github.com/rachel-fischoff/ctd-app.git`. 
1. Navigate to into the projects root directory by typing `cd ctd-app`
1. Install the project's dependencies and modules by typing `npm install` into your command line application. A list of these modules should be displayed after their downloaded. 

## Running the project
After cloning and installing project dependencies, type `npm start` into your command line application. The will tell you Node.js to compile the project and turn into a website.

## Accessing the project in your browser
After `npm start` the command line will let you know that the website is compile successfully! And that you view `ctd-app` in your browser. [http://localhost:3000]( http://localhost:3000)

## Contributors
[Rachel Fischoff](https://github.com/rachel-fischoff)
