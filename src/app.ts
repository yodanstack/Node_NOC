import { envs } from './config/plugins/envs.plugin';
import { LogModel, MongoDataBase } from './data/mongo';
import { Server } from './presentation/server';


(async() => {
  main();
})();


async function main(){

  await MongoDataBase.connect({
    mongoUrl: envs.MONGO_URL,
    dbName: envs.MONGO_DB_NAME
  });

  //Crear una trabla(coleccion), y registro(documento)
  // const newLog = await LogModel.create({
  //   message: 'Test message desde Mongo',
  //   origin: 'App.ts',
  //   level: 'low'
  // }); 

  // await newLog.save();
  // console.log(newLog);
  
  const logs = await LogModel.find();
  console.log(logs); 
  
  // Server.start();
}


