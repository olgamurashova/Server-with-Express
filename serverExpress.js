const express = require('express');
const app = express();
const PORT = process.env.PORT || 4001
app.listen(PORT, ()=> {
console.log(`The server is listening on ${PORT}.`)
});


const express = require('express');
// Instantiate the app here
const app = express();

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
console.log(`The Server is listening on ${PORT}.`)
});
