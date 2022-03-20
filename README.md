# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- view the app on any device 
- get some hover effects 
- recieve an advice upon clicking the dice button 

### Screenshot

![](/images/final.png)


### Links

- Solution URL: [https://github.com/anas-cd/advice-generator-app](https://github.com/anas-cd/advice-generator-app)
- Live Site URL: [https://anas-cd.github.io/advice-generator-app/](https://anas-cd.github.io/advice-generator-app/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS preprocessor 
- Flexbox


### What I learned

API calls can get hectic taking into considiration all of the borwers to be belt for, for example the code bellow fetches the data from the HTTPS GET link provided by the api creators. 

To see how you can add code snippets, see below:

```js
$.getJSON('https://api.adviceslip.com/advice', function(data) {
            
  console.log("fetching advice ...");
  slipdata =  data.slip; // assigning the object to slipdata

  id.innerHTML=slipdata.id;       // writing id
  ad.innerHTML=slipdata.advice;   // writing advice
    
});
```
this is a Jquery approuch of to get the Json data from that link. 

the problem I ran into is that it works fine for Chrome and Edge browsers but it was getting cached on Firefox, so each time the users clicks the dice button they will get the first cached response, I don't know if this is caused by this method only or not but here is the solution I found for it. 

I added an ".ajaxSetup" code to set the cach for all ajax usage ot be false, since ".getJSON" uses ajax that works. 

```js 
$(document).ready(function() {      //
    $.ajaxSetup({ cache: false });  // to disable caching globally 
});   
```
this will disable caching globally, not a good solution for big projects as you might need some requests to be cached but it's sutable for this project size. 


### Useful resources

- [MDN HTTPS status](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200) - This helped me to understand the network responces I was getting.
- [Jquery.ajax docs](https://api.jquery.com/jquery.ajax/) - This helped me understand the synatx of how to disable cache of ajax, and made me understand how getJSON uses ajax. 

## Author

- Frontend Mentor - [@anas-cd](https://www.frontendmentor.io/profile/anas-cd)
- Twitter - [AnasCd](https://twitter.com/AnasCd)



