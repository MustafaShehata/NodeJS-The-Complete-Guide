# Assignment 01


### Tasks:
1. Spin up a Node.js-driven Server (on port 3000)
2. handle two routes "/" and "/users": How to read incoming url requests? depending on its value.
   - Return some greeting text on "/" - return some HTML code - some dummy text - some h1 tag - Hello, welcome to my Page!
   - Return a list fo dummy users (eg. ```<ul><li>User1</li></ul>```) - in "/users" route - HTML list
3. Add a form with a "username" ```<input>``` to the "/" page and submit a POST request to "/create-user" upon a button click.
4. Add the "/create-user" route and parse the incoming data (i.e. the username) and simply log it to the console.