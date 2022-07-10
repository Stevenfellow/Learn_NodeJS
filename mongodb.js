const { MongoClient } = require('mongodb');
const url = 'mongodb.net/hope21.names';

async function main() {
   
    const uri = "mongodb://localhost:27017";

    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        await listDatabases(client);

    } catch (e) {
        console.error(e);
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

main().catch(console.error);

/**
 * Print the names of all available databases
 * @param {MongoClient} client A MongoClient that is connected to a cluster
 */
async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
// MongoClient.connect(url, function (err, db) {
    
//     if (err) throw new Error(err);
//     db.collection('hope21.names').insertOne({ // Insert method 'insertOne'
//     "myFirstDocument": {
//     "greetings": "Hellu",
//     "farewell": "Bye"
// }
// }, function (err, result) {
// if (err) throw new Error(err);
// console.log("Inserted a document into the names collection!");
// db.close(); // Don't forget to close the connection when you are done
// });
// });
