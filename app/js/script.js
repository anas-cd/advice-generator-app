console.log("Load script.js");

// disable cache to insure functionaltiy for Firefox users
$(document).ready(function() {      //
    $.ajaxSetup({ cache: false });  // to disable caching globally (sutable for this project due to its size) 
});                                 // 

// $.ajax({                         //
//     cache: false,                //
//     url: "/path/to.json",        //
//     dataType: "json",            //  to disable caching for one specific request 
//     success: function(data) {    //  
//         ...                      //
//     }                            //  
// });                              // 

// Instantiating the global app object
var app = {};

