
// const http = require ( "http");
// http .createServer((req,resp)=>{
// resp.writeHead(200, {
//     "content-Type" : "application\json",
// });
// resp.write (JSON.stringify ({
//     "Name": " Harry", 
//     "Email" : "harshitraj4498@gmail.com",
//     "Adress" : " Vijay shankar vastralay main road near ashok chawk ",
// }))
// resp.end ();
// }).listen(5000, ()=>{
//     console.log("server started at the port 6000 ")
// });

 

// Asynchronous operation in Node js 
 

//  const a =34;
//  let  b = 0;
 
  
// let data = new Promise((resolve, reject) => {
//      setTimeout(() => {
//     resolve (30);
//   }, 3000);
// })
 
// data.then((x)=>{
//     b=x;
//     console.log(a+b);
// })


// taking input from  the adress bar 


//  const express = require ('express');
//  const app = express();

//  app.get('/', (req, res) => {
//    res.send(`GET request to the homepage  and <h1> Hey I love the World More than you ok </h1> ${req.query.name} `)
//  })
//  app.listen ( 3000,()=>{
//     console.log(" Hi the server has been started")
    
//  });


// Make Html page in Node js 


//const path = require ('path')
//
//const app = express ();
//console.log(__dirname);





//const publicPath = path.join (__dirname, 'public');


// console.log(publicPath);
//app.use (express.static (publicPath));


 // or we can do this with the help of get method 

//  app.get ('/help', (req,resp)=>{
//     resp.sendFile (`${publicPath}/help.html`)
//  })


// app.set("view engine", "ejs")

// app.get('/', (req, res) => {

//     const user = 
//         {
//             "Aayu" : " Holly Family School",
//             "Class": 4,
//             "RollNo." : 18,
//             "name" : ["harry", "rashmi", "puja","surbhi", "kommo", "gauro"]
//         }
    
//   res.render('index',{user})
// })
 
// app.listen ( 3000, ()=>{
//     console.log(" The server has started at  the port 3000")
// })


// Middleware 
//  const express = require('express')
//  const app = express();


//   const adult = (req,resp, next)=>{

//      if (req.query.age<18 )
//      {
//         resp.send (" Hi  Your are not old ")
//      }
// else 
// {
//     next();
// }
//   } 
//   app.use ( adult);
//  app.get('/', (req, res) => {
//    res.send('GET request to the homepage')
//  })
  





// const express = require('express');
// const  app = express();
// const mongoose = require ('mongoose');
// const mongodb =  "mongodb://0.0.0.0:27017/rollingkart";


// mongoose.connect (mongodb, (err)=>{
//   if (err) console.log(`Unable to connect to the server : ${err}`);
//   else 
//   console.log('CONNECTED')
// })

// app.listen ( 3000);

  // Data Base connection 

// const {MongoClient} = require('mongodb');
//  const url ="mongodb://0.0.0.0:27017";
//  const database = "rollingkart";

// const client = new MongoClient (url);

// async function getData ()
// {
//       let  result = await client.connect ();
//       db =  result.db(database);
//       collection =  db.collection('products');
//       let response  = await collection.find().toArray();
//       console.log(response);
// } 
// getData();

const getData = require ('./mongodb');
const main = async  ()=>{
   // console.log(" main function called ");
    let resp =await getData();
  let   data=  await resp.find().toArray()
    console.log(data)
}

main ();