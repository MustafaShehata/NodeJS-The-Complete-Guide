/* require("PathToFile")
  takes a path to another file
  also you can import your own JavaScript file
  if you don't have a path to one of your files, you can also import a core module, like http

  Types of paths

  Relative path - "./" A path that describes the location of a file or resource in relation to the current file or directory.
  ex. RP(Relative Path) "./script.js" (current directory) , "../images/photo.jpg" (parent directory)
  Usage: (RP) used for importing modules, linking stylesheets, or referencing images within the same project structure


  Absolute path - A path that describes the location of a file or resource from the root of the file system or the root of the web server.

  ex. (AP) "/home/user/project/script.js" (file system absolute path, often in Nodejs)
            "/assets/images/photo.jpg" (web server root)
            "https://example.com/styles/main.css" (fully qualified URL)

  Usage: (AP) used to reference files or resources regardless of the current file's location.
              In Web Dev., an absolute path starts from the site root or is a full of a file or resource from the root of the file system or the root of the web serverURL.



  * Relative path import (Node.js or ES6 modules)
  import helper from "./utils/helper.js";

  * Absolute path import (Node.js with __dirname)
  import helper from "/usr/local/app/utils/helper.js";
*/


const http = require("http");
const routes = require('./routes');



console.log(routes.someText);

const server = http.createServer(routes.handler);

// listen for incoming requests
server.listen(3000);

/* Searching Topics
  "Event Driven Architechture"
*/
