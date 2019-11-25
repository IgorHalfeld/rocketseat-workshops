import { MongoClient, Db } from 'mongodb';

interface IConfig {
  dbName: string;
  url: string;
}
interface IMongoOptions {
  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
}

const config: IConfig = {
  dbName: '',
  url: 'mongodb+srv://god:dog@cluster0-dfsvs.mongodb.net/dgo?retryWrites=true&w=majority',
};
const options: IMongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export let mongoClient: Db;

MongoClient.connect(config.url, options, (err: Error, mongoConnection: MongoClient) => {
  if (err) {
    console.log('🔥 Mongodb connected');
    return;
  }
  mongoClient = mongoConnection.db(config.dbName);
});