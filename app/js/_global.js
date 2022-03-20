const id = document.querySelector('#adid');  // advice id
const ad = document.querySelector('#advice');// advice 
const btn = document.querySelector('#btndicer'); // dice btn
let slipdata;

// Global
app.global = {
    init: function(){ // Load all global functions here
        console.log("loading global functions");
        app.global.loadAdvice();
    },
    loadAdvice: function(){ // advice function
        console.log("loading advice");

        // calling api
        $.getJSON('https://api.adviceslip.com/advice', function(data) {
            
            console.log("fetching advice ...");
            slipdata =  data.slip; // assigning the object to slipdata
            console.log(slipdata);          //
            console.log(slipdata.id);       // checking 
            console.log(slipdata.advice);   //

            id.innerHTML=slipdata.id;       // writing id
            ad.innerHTML=slipdata.advice;   // writing advice
            
        });
    }   
}

// Run the global stuff
app.global.init();

btn.addEventListener('click', () => {
    console.log("dice rolled"); 
    app.global.loadAdvice();
});