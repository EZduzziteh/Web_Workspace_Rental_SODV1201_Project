/* SODV 1201 Introduction to Web Programming
SODV 1201 Term Project- Co-Worker Work Spaces and Properties
 Program designed and coded by: SODV 1201 Group 2: Sasha Greene,  Gurleen Kaur, Paul K Kho, Evan Maclean
 Instructor:                   Dima Marachi
 Due       :     Phase 1   : June 2 2022
                 Phase 2   : June 30 2022
*/
import {createServer } from 'http';
const Port = 3000;
var result= "<html> <body>  <h1> This is a first webServer render page "+
"</h1> </body> </html> ";
var server = createServer(function(req, res) {
    res.writeHead(200, {"content-type": "text/html", "content-length":result.length})
    res.write("Hi This is our first local server");
    res.write("Testing links to front end HTML ");

})
server.listen(Port);
console.log(`Server now listening from https://localhost:${Port}.` );


