
/*
WHAT IS EXPRESS.JS
• A minimal yet flexible and powerful web development framework for node.js

• Minimal
    • Doesn’t come with all sorts of functionality,
    • Supports only the very basic features, not all of them are enabled by default
    
• Flexible and Powerful
    • Uses its own ‘middleware’
    • Use of any nodejs modules
    • Complete access to node API
*/
/*
APPLICATION OBJECT
    An instance of Express
    e.g.
    const express = require('express');
    const app = express();
    
REQUEST OBJECT
    Created when a client makes a request to Express app.
    
RESPONSE OBJECT
    Created along with the request object.
    
MIDDLEWARE
• A JavaScript function that is plugged in the middle of processing flow
• Can manipulate Request and Response objects
• Can perform an isolated action
• Can terminate the request flow by returning a response to the client
• Can pass on the control to the next middleware.

• Loaded in an Express app using the app.use() method.
• Parameters
    • req - Request object
    • res - Response object,
    • next - a reference to the next middleware in line
    e.g.
    app.use(function(req, res, next) {
        console.log('Request from: ' + req.ip);
        next();
    });
    
ROUTING

• routes : destinations of the HTTP request URIs

• How you tell your app "for this URI, execute this piece of JavaScript code" - called a route handler.

• Route Handler
    • responds to an HTTP request,
    • Or pass it on to another handler function if it does not
• Two approaches
    • Basic
        e.g.
        app.HTTP_METHOD(PATH, ROUTER_HANDLER);
    • Router Object
        e.g.
        const router = express.Router(); // A system middleware
        router.use();
        
        // Use a defined router
        // Load the router module with ‘require’
        const ROUTER_MODULE = require("./mymodule");
        app.use(PARTIAL_PATH, ROUTER_MODULE)
*/

    










