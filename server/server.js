import {app} from './app.js';
import { db_connect } from './data/database.js';
const port=4000;
db_connect();
app.listen(port,()=>{
    console.log(`App is listening to port number- ${port}`);
 })