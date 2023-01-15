const getData = require ('./mongodb');


const deleteDb = async()=>{

    let  data = await  getData();

    let result =await  data.deleteMany ({ name: "max 2" })

   if (result.acknowledged){

    console.warn ("deleted");
}
   }
     

deleteDb();