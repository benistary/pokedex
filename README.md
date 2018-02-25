# POKEDEX

**Simplified version of pokedex in React.JS**

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
Link - http://benjaminstary.studenthosting.sk/

## Description

The whole project is wrapped in Redux framework, which holds the whole app's state ( specifically 9 pokemons ).

When app is being initialised (componentWillMount), then is called action method **fetch Pokemons** which returns specific list of pokemon's api URL to an object (_let fetchedPokemons_). For loop method asynchronously iterate through this object (with async/await method) and calls specific pokemon's url and puts result of this call to an array of objects (_let pokemons_). This creates lists of pokemons with their whole data from API.

When this array of objects is created, then it is pushed to redux state and we can finally work with pokemons in components.

## Notes

* try to narrow window
* pokemon's names are printing to console while fetching from API
* initial fetching is little bit long becasue each pokemon has big amount of data

## Plugins

* __Axios__ - https calls
* __node-sass-chokidar__ - possibility of usage SASS preprocessor
* __react-addons-css-transition-group__ - smooth transitions between pokemons :-)
* __redux__ - better work with app's state
* __redux-thunk__ - middleware that delays dispatching of specific function, ...
