const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;
app.get('/' , (req , res)=>{

   res.send('WOW...hello from simple server 20 :)')

});
const users = [
    {
        id: 0,
        name: "Sabana",
        email: "sabana@gmail.com",
        phone: "123",
    },
    {
        id: 1,
        name: "Sabnur",
        email: "sabana@gmail.com",
        phone: "123",
    },
    {
        id: 2,
        name: "Popy",
        email: "sabana@gmail.com",
        phone: "123",
    },
    {
        id: 3,
        name: "Pori Mony",
        email: "sabana@gmail.com",
        phone: "123",
    },

];
app.get('/users' , (req , res)=>{
    const search = req.query.search;
    if( search ){
        // Use Query Parameters
        const  searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search) );

        res.send(searchResult);
    }else{
        res.send(users);
    }
   

})

// APP METHOD 

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log("Hitting the post", req.body);
    res.json(newUser)
});

//Dynamic Api
app.get('/users/:id', (req, res)=> {
    const id = req.params.id;
    const single_user = users[id];
    res.send(single_user);

} );

app.get('/fruits' , (req , res)=>{

   res.send(['Mango','Orange','Banana','Apple'])

})

app.get('/fruits/mango/fazli', (req, res) =>{
    res.send("Yummy Yummy Tok AAMMMM..");
} )

app.listen(port, () => {
    console.log('listening on port ', port)
})