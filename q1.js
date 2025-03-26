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

    const cust = [
      { name: 'John Doe', age: 20, grade: 'A' },
      { name: 'Jane Smith', age: 22, grade: 'B' },
      { name: 'Emily Johnson', age: 21, grade: 'A' }
  ];


  const result = await collection.insertMany(cust);
  // console.log('Records inserted:', result);
    const customers = await collection.find({}).toArray();

  
    console.log('Customers:', customers);
  } catch (err) {
    console.error('Error fetching customers:', err);
  } finally {
  
    await client.close();
  }
}


fetchCustomers();

