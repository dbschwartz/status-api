const express = require('express')
const app = express()
const port = 3000

const users = [
   {
       name: 'John Smith',
       status: 'Exploring'
   },
   {
       name: 'Angela Bangela',
       status: 'Cat sitting'
   },
   {
       name: 'Elroy Burgers',
       status: 'Feeding frenzy'
   } 
]

app.get('/allStatuses', (req, res) => {
  res.json(users)
})



app.post('/newUser', function(req, res) {

    const newUser = req.body;
    if(users.find(users => users.name !== newUser.name)){
        users.push(newUser);
        res.statusMessage = "New User Created!";
        res.status(401).end();
    } else {
        res.statusMessage = "User already exists!";
        res.status(400).end()

    }
});

app.listen(port, () => {
  console.log(`Status Api listening at http://localhost:${port}`)
})