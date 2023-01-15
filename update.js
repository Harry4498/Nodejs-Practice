 const getData = require ('./mongodb');



 const updateData  =async ()=>{

    let db = await getData();
 
   let result= await db.update(
        {name: 'Golden-Retriver'}, {
            $set: {name : 'Golden'}
        }
    );
console.log(result);
 }
 updateData();
  



