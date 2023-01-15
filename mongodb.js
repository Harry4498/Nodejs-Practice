
const {MongoClient} = require('mongodb');
const url ="mongodb://0.0.0.0:27017";
const database = "rollingkart";
const client = new MongoClient (url);

async function getData ()
{
      let  result = await client.connect ();
      db =  result.db(database);
      return db.collection('products');
    //   let response  = await collection.find().toArray();
    //   console.log(response);
}


// console.warn (getData()) it willl gieve promise pending 
// Method 1 
// getData().then ((resp)=>{
// resp.find({}).toArray().then ((data)=>{
//  console.warn ( data)
// })   // to aray also return a promise 
// })
// Method 2

// const main = async  ()=>{
//    // console.log(" main function called ");
//     let resp =await getData();
//   let   data=  await resp.find().toArray()
//     console.log(data)
// }

// main ();

module.exports = getData;