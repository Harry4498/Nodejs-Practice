const express = require('express');
const getData = require ('./mongodb');
const mongodb = require('mongodb');
const app = express()

app.use(express.json());  // its a middleware 


app.get('/', async  (req, res) => {
      
     let data = await getData();
     data = await data.find().toArray();
     console.log(data);
     res.send(data);

  });

  app.post ('/', async(req,resp)=>{
      //resp.send(req.body)
      console.log(req.body);
      let data = await getData();
      let result = await data.insert(req.body)
      resp.send(result)
  });



app.put ('/',async (req,resp)=>{
  //resp.send("EveryDay");
   // resp.send (req.body);
     let data = await getData();
     let result = await data.updateOne(
      // this is static way of updating (method 1)
      // {brand: "apple"},  
      // {$set:{brand: "Orange"} })
      
      // This is a dynamic way of updating (m-2)
      // {brand:"orange"},  
      // {$set:req.body })

       // This is a dynamic way of updating (m-3)

          {name:req.body.name},  
           {$set:req.body })

          //   when we want to update the same  like name that we are aceesing from the body we can use  of Params 
          //  app.put('/:name' ()=>{
          //          {name:req.params.//name},  
          //          {$set:req.body })
          //  })


           resp.send("Updated")

})

app.delete('/:id', async (req, resp)=>{
  // console.log(req.params.id);
 let data = await getData();
 // we need to import mongodb lib.
 // we need to create object id instance 
 // if we  have to use _id: to delete 
 
     let result = await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
  resp.send("Done")

})
    


const port = 5000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
