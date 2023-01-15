const getData = require ('./mongodb')

const insert = async ()=>{
   // console.log("insert function");

    const db = await getData();

   // console.log(data);
   
   const result =  db.insert(
    
        {name: 'max 9', brand : 'micromax', price : 220, category : 'mobile' }
   )

   if (result.acknowledge )
   {
 console.log("inserted sucessfully");

   }
}


 insert();
