/* SODV 1201 Introduction to Web Programming
SODV 1201 Term Project- Co-Worker Work Spaces and Properties
 Program designed and coded by: SODV 1201 Group 2: Sasha Greene,  Gurleen Kaur, Paul K Kho, Evan Maclean
 Instructor:                   Dima Marachi
 Due       :     Phase 1   : June 2 2022
                 Phase 2   : June 30 2022
*/


// Build in JS  packages
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const Port = 3000;
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
//Console this variable to see your dir name
console.log(__dirname);

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended : false})); // incoming requests consided as string or array using this express built-in method

app.get('/index', function(req, res){
    res.sendFile('index.html', {root: path.join('__dirname', '../')});
})

app.post('/UserDB', (request, response) => {
    const postBody = request.body;
    console.log(JSON.stringify(postBody));
})

app.listen(Port, () => console.info('Application running on port ' + ` ${Port} `));





