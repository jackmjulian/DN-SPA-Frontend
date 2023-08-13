# DN Basic Webpage Framework (Example- Single Page Navigation)
Using **Node.js**, **Express** and **TypeScript**.

This framework allows you to practice developing basic webpages in HTML, CSS, JavaScript and TypeScript.

What are Web Frameworks? - [mdn web docs](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Web_frameworks)

## Contents
1. [Setting Up your Environment / Dependencies](#1-setting-up-your-environment--dependencies)
    - [Node.Js](#nodejs)
    - [TypeScript](#typescript)
2. [Project Installation](#2-project-installation)
3. [Contents of the Framework](#3-contents-of-the-framework)
    - [Project Folders / Files](#other-project-folders--files)
4. [How to use the Framework](#4-how-to-use-the-framework)
    - [Starting the Express Server](#starting-the-express-server)
    - [Stopping the Express Server](#stopping-the-express-server)
    - [Adding HTML](#adding-html)
    - [Adding CSS](#adding-css)
    - [Adding JavaScript](#adding-javascript)
    - [Adding TypeScript](#adding-typescript)
5. [Single Page Navigation Example](#5-single-page-navigation-example)
    - [Overview](#overview)
    - [index.html](#indexhtml)
    - [script.js](#scriptjs)
    - [section-content-manager.js](#section-content-managerjs)


## 1. Setting Up Your Environment / Dependencies
### Node.Js
Node.Js must be installed to run this framework.

How to install Node.Js - [Node.js Docs](https://nodejs.dev/en/learn/how-to-install-nodejs/)

To check you have Node.Js installed, run the following command in the terminal.

`node --version`

This should have been installed during **Bootcamp Level 0**.

This framework has been tested with Node.Js Version - **18.17.0**

### TypeScript
TypeScript must be installed to run this framework.

To Install TypeScript globally run the following command:

`npm install -g typescript`

To check you have TypeScript installed, run the following command in the terminal.

`tsc --version`

This framework has been tested with Typescript Version - **5.1.6**

More information on TypeScript - [TypeScript Docs](https://www.typescriptlang.org/docs/)

## 2. Project Installation
After cloning the repository, the projects dependencies will need to be installed. In the root directory of your project, run the following command to install the neccessary packages.

`npm install`

More information on NPM - [Intro to NPM package Manager](https://nodejs.dev/en/learn/an-introduction-to-the-npm-package-manager/)

We advise that you use `Git` to clone this github repository. Alternativly you can download this repo as a `.zip` file through github.

What is Git? - [Getting Started - What is Git?](https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F)

How to install Git? - [Getting Started - Installing Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

### Project Folders / Files
#### ./build
This folder contains JavaScript files that have been produced from the TypeScript compiler.
#### ./node_modules
This folder contains all of the installed node packages.
#### ./public
Everything in this folder is made public by the server and can be referenced in your `index.html` file.
#### ./typescript
This folder is used to store TypeScript files and is compiled on server start. JavaScript produced from compiling is stored within the `./build/typescript` folder.
#### ./.gitignore
This file contains a list of files that will be excluded from the projects repository.
#### ./app.ts
This is the main app file that is used by the express server to handle requests.
#### nodemon.json
This file contains configuration for `nodemon`, which is used to restart the server when .ts files are changed.
#### ./package-lock.json
This file contains a detailed list of packages installed in the project.
#### ./package.json
This file contains a list of general information about the project including name, version and dependencies.
#### tsconfig.json
This file contains the TypeScript compiler configuration.


## 4. How to use the Framework
### Starting the Express Server
To start the express server run the following command

`npm start`

This command will compile any TypeScript that has been added to the project within the TypeScript folder and run the Express server. By default the Express server will run on **port 3000**

Once the command has finished running you will see the output `Express Server Running - Port: 3000`. 

Open a browser and navigate to `localhost:3000` and the index page will render.

### Stopping the Express Server
To stop the express server in the terminal press `ctrl + c` and press `y, enter` to Terminate Batch Jobs (Terminate Batch Job may need to be executed twice).

### Adding HTML
HTML can be added to the `index.html` file within the `./public` directory.

### Adding CSS
CSS can be added to the `styles.css` file into the `./public` directory.

New `.css` files added to the `./public` directory must be referenced in your target `.html` file, for example:

`<link rel="stylesheet" type="text/css" href="styles.css">`

### Adding JavaScript
JavaScript can be added to the project by adding a `.js` file into the `./public` directory.

Any JavaScript that you would like to include with your page, must be included as a html script tag. For Example:

`<script src="script.js"></script>`

### Adding TypeScript
TypeScript can be added into the project through the `./typescript` directory.

When running the server the TypeScript is compiled and added to the `./build` directory. Any changes to this directory will be overridden when the compiler re-runs.

Any TypeScript that you would like to include with your page, must be included as a html script tag **with the extension of .js not .ts**.

`<script src="tsscript.js" type="module" defer></script>`

## 5. Single Page Navigation Example
### Overview
This example demonstrates how elements can be manipulated to create a single page application.

### index.html
Within the `index.html` file there is a `<div id="section">` which acts as a container for the inserted content.

```html
<div class="section-container">
    <div id="section" class="section">
        <!-- Contents Inserted by section-content-manager.js -->
    </div>
</div>
```
### script.js

The content that is inserted into this element is determined by the [URL Hash](https://developer.mozilla.org/en-US/docs/Web/API/Location/hash). 
In this example we are setting the hash value using `<a>` elements with the href tag set to the required value.

```html
<a href="#section1" class="nav-link green-btn">Section 1</a>
<a href="#section2" class="nav-link green-btn">Section 2</a>
<a href="#section3" class="nav-link green-btn">Section 3</a>
```

By default the Hash is set to `#section1` and the content is updated.

```JavaScript
//Set the hash to default
if(!location.hash){
    location.hash = "#section1";
};

//Update Section on Load
UpdateSection();
```
The Code below listens for when the `location.hash` is changed, when triggered the `UpdateSection();` function is called.

```JavaScript
//Update Section Contents when hash is changed.
window.addEventListener("hashchange", () =>{
    UpdateSection();
})
```

This function calls the `UpdateSectionContent(sectionName)` function within the `section-content-manager.js` script.
```JavaScript
//Update Section calls update section contents in the "section-content-manager" script.
function UpdateSection(){
    var sectionName = location.hash.substring(1);
    SectionContentManager.UpdateSectionContent(sectionName);
}
```

### section-content-manager.js

The `section-content-manager.js` script handles the manipulation of the section element.

The `UpdateSectionContent(sectionName)` function sets the section elements innerHTML to that value returned from `GetSectionContent(sectionName)`.

```JavaScript
//Reference Section Element
const Section = document.getElementById("section");

//Export Allows this function to be imported into other scripts.
export function UpdateSectionContent(sectionName){
    Section.innerHTML = GetSectionContent(sectionName);
}
```

The `GetSectionContent(sectionName)` function takes in a section name and returns the content for the requested section.

```JavaScript
//Get Section Content based on the SectionName
function GetSectionContent(sectionName){
    if(sectionName == "section1")
        return Section1Content();
    else if(sectionName == "section2")
        return Section2Content();
    else if(sectionName == "section3")
        return Section3Content();
    else
        return SectionNotFoundContent();
}
```

The below functions return a html string that is to be inserted for that section. These can also be treated as templates.

```JavaScript
//Section Template Functions - Returning html for that section.
function Section1Content(){
    return `
    <p class="section-title">Section 1</p>
    <div class="section-nav">
        <a href="#section2" class="nav-link green-btn">Section 2</a>
        <a href="#section3" class="nav-link green-btn">Section 3</a>
    </div>
    `;
}

function Section2Content(){
    return `
    <p class="section-title">Section 2</p>
    <div class="section-nav">
        <a href="#section1" class="nav-link green-btn">Section 1</a>
        <a href="#section3" class="nav-link green-btn">Section 3</a>
    </div>
    `;
}

function Section3Content(){
    return `
    <p class="section-title">Section 3</p>
    <div class="section-nav">
        <a href="#section1" class="nav-link green-btn">Section 1</a>
        <a href="#section2" class="nav-link green-btn">Section 2</a>
    </div>
    `;
}

function SectionNotFoundContent(){
    return `
    <p class="section-title">Section was not found. Please Select a Section</p>
    <div class="section-nav">
        <a href="#section1" class="nav-link green-btn">Section 1</a>
        <a href="#section2" class="nav-link green-btn">Section 2</a>
        <a href="#section3" class="nav-link green-btn">Section 3</a>
    </div> `;
}

```