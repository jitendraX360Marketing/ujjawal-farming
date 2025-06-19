import { MongoClient } from 'mongodb';

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient>;
}

const uri = "mongodb+srv://officialjangidjitendra:NwXz3NNqNaMpTamv@digitrainic-clstr.uzxvwzo.mongodb.net/?retryWrites=true&w=majority&appName=digitrainic-clstr";

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!globalThis._mongoClientPromise) {
  client = new MongoClient(uri);
  globalThis._mongoClientPromise = client.connect();
}
clientPromise = globalThis._mongoClientPromise;

export default clientPromise;
