const fs = require('fs');

const conn = new Mongo("mongodb://admin:password@mongoDB:27017");
const db = conn.getDB("tmdb_movies");
const collectionName = 'movies';

const dataFilePath = '/docker-entrypoint-initdb.d/seeding.json'; 
let jsonData;

try {
    jsonData = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
    printjson(jsonData);
} catch (e) {
    print(`Error reading JSON file: ${e}`);
}

try {
    const result = db[collectionName].insertMany(jsonData);
    print(`${Object.keys(result.insertedIds).length} documents were inserted`);
} catch (e) {
    print(`Error inserting documents: ${e}`);
}
