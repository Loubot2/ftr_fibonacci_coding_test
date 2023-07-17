# FTR Fibonacci Game

## Part 1

# Fibonacci
Code is split in to 2 parts. 
### core
contains the main logic
### web
contains the ui this uses react

# Getting Started with Fibonacci Game

This project requires Node to run

## Setup
### `npm ci`
install libs

## To start UI
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## To run unit tests

### `npm test`

Launches the tests

## To build

### `npm run build`
Runs webpack in production mode
Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified .\
Your app is ready to be deployed!


### Part 2: Changes to your application

##  You have a new requirement to implement for your application: its logic should stay exactly the same but it will need to have a different user interface (e.g. if you wrote a web app, a different UI may be a REPL). Please describe how you would go about implementing this new UI in your application? Would you need to restructure your solution in any way?

If I was going to implement this as a CLI. I would keep core as there is no react code in there and it is the main logic. I would definitely need to redo the web part as using pages wouldn't make sense. I would keep the event bus and implement it differently as the document isn't available. I would look for an event bus library. I could then still have a listener to output to the user.

I would refactor IntervalOutput to move logic over to core and make it not so tightly coupled.

##  You now need to make your application “production ready”, and deploy it so that it can be used by customers. Please describe the steps you’d need to take for this to happen.
solution has some production ready features such as Babel, tsc and webpack
1. increase code coverage
2. add git hooks
  2.1. auto lint on commit/push
  2.2. github action for branch/main
3. build to ci
  3.1. npm test > output code coverage
  3.2. npm build
  3.3 deploy to cloud statically using code like pulumi

##  What did you think about this coding test - is there anything you’d suggest in order to improve it?
I liked the coding test it was an interesting challenge. There are a lot of parts to this coding test which may be hard for developers that don't have much. It took a bit for me to get my head around it. My suggestion is to make the description a bit clearer. Also, make it clearer what you looking for. e.g. tests.
