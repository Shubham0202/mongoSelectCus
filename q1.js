const { MongoClient } = require('mongodb');


const url = 'mongodb://localhost:27017'; 
const client = new MongoClient(url);


const dbName = 'mscdb5';
const collectionName = 'customers';

async function fetchCustomers() {
  try {

    await client.connect();
    console.log('Connected successfully to MongoDB server');

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

  
    const customers = await collection.find({}).toArray();

  
    console.log('Customers:', customers);
  } catch (err) {
    console.error('Error fetching customers:', err);
  } finally {
  
    await client.close();
  }
}


fetchCustomers();

